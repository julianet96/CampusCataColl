<script setup lang="ts">
import { computed, ref } from 'vue';
import { inscriptionData, inscriptionStape } from 'src/entity/inscriptions';

type FieldType = 'STRING' | 'NUMBER' | 'SELECT';

interface RegistrationField extends inscriptionData {
  type: FieldType;
  newOption?: string;
}

interface RegistrationStep extends inscriptionStape {
  inscriptionData: RegistrationField[];
}

const fieldTypeOptions = [
  { label: 'Texto', value: 'STRING' },
  { label: 'Número', value: 'NUMBER' },
  { label: 'Selector', value: 'SELECT' },
];

const steps = ref<RegistrationStep[]>([
  {
    name: 'Datos personales',
    icon: 'person',
    order: 1,
    inscriptionData: [
      { type: 'STRING', label: 'Nombre y apellidos', value: '', options: [] },
      { type: 'NUMBER', label: 'Año de nacimiento', value: '', options: [] },
    ],
  },
  {
    name: 'Preferencias deportivas',
    icon: 'sports_soccer',
    order: 2,
    inscriptionData: [
      {
        type: 'SELECT',
        label: 'Categoría',
        value: '',
        options: ['Infantil', 'Cadete', 'Juvenil'],
      },
    ],
  },
]);

const selectedOrder = ref<number>(steps.value[0]?.order ?? 1);

const selectedStep = computed(() =>
  steps.value.find((step) => step.order === selectedOrder.value),
);

const syncOrders = () => {
  steps.value = steps.value.map((step, index) => ({
    ...step,
    order: index + 1,
  }));
  if (!steps.value.find((step) => step.order === selectedOrder.value)) {
    selectedOrder.value = steps.value[0]?.order ?? 1;
  }
};

const addStep = () => {
  const newOrder = steps.value.length + 1;
  steps.value.push({
    name: `Nuevo paso ${newOrder}`,
    icon: 'format_list_bulleted',
    order: newOrder,
    inscriptionData: [],
  });
  selectedOrder.value = newOrder;
};

const removeStep = (order: number) => {
  steps.value = steps.value.filter((step) => step.order !== order);
  syncOrders();
};

const moveStep = (order: number, direction: 'up' | 'down') => {
  const index = steps.value.findIndex((step) => step.order === order);
  const targetIndex = direction === 'up' ? index - 1 : index + 1;
  if (index < 0 || targetIndex < 0 || targetIndex >= steps.value.length) {
    return;
  }
  const reordered = [...steps.value];
  const [moved] = reordered.splice(index, 1);
  if (!moved) {
    return;
  }
  reordered.splice(targetIndex, 0, moved);
  steps.value = reordered;
  syncOrders();
  selectedOrder.value = steps.value[targetIndex]?.order ?? selectedOrder.value;
};

const addField = (step: RegistrationStep) => {
  step.inscriptionData.push({
    type: 'STRING',
    label: 'Nuevo campo',
    value: '',
    options: [],
  });
};

const removeField = (step: RegistrationStep, index: number) => {
  step.inscriptionData.splice(index, 1);
};

const addOption = (field: RegistrationField) => {
  const textValue = (field.newOption ?? '').trim();
  if (!textValue) {
    return;
  }
  field.options = [...field.options, textValue];
  field.newOption = '';
};

const removeOption = (field: RegistrationField, index: number) => {
  field.options.splice(index, 1);
};
</script>

<template>
  <q-page class="q-pa-lg">
    <div class="text-h5 text-weight-bold q-mb-md">
      Configuración de pasos de inscripción
    </div>
    <div class="text-subtitle2 text-grey-7 q-mb-lg">
      Define los pasos del formulario y los campos que verá cada familia durante el registro.
    </div>

    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-4">
        <q-card bordered>
          <q-card-section class="row items-center justify-between">
            <div class="text-h6 text-weight-bold">Pasos</div>
            <q-btn color="primary" icon="add" label="Nuevo paso" @click="addStep" />
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <q-list separator>
              <q-item
                v-for="step in steps"
                :key="step.order"
                clickable
                :active="step.order === selectedOrder"
                active-class="bg-primary text-white"
                @click="selectedOrder = step.order"
              >
                <q-item-section avatar>
                  <q-icon :name="step.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ step.order }}. {{ step.name }}</q-item-label>
                  <q-item-label caption>{{ step.inscriptionData.length }} campos</q-item-label>
                </q-item-section>
                <q-item-section side class="q-gutter-xs">
                  <q-btn
                    dense
                    flat
                    round
                    icon="expand_less"
                    :disable="step.order === 1"
                    @click.stop="moveStep(step.order, 'up')"
                  />
                  <q-btn
                    dense
                    flat
                    round
                    icon="expand_more"
                    :disable="step.order === steps.length"
                    @click.stop="moveStep(step.order, 'down')"
                  />
                </q-item-section>
                <q-item-section side>
                  <q-btn
                    dense
                    flat
                    round
                    icon="delete"
                    color="negative"
                    @click.stop="removeStep(step.order)"
                  />
                </q-item-section>
              </q-item>
            </q-list>
            <div v-if="steps.length === 0" class="q-pa-lg text-center text-grey-6">
              Añade un paso para empezar a configurar el registro.
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-8">
        <q-card bordered>
          <q-card-section class="row items-center justify-between">
            <div>
              <div class="text-h6 text-weight-bold">Detalle del paso</div>
              <div class="text-caption text-grey-6">Configura nombre, icono y campos.</div>
            </div>
            <q-btn
              color="secondary"
              icon="post_add"
              label="Añadir campo"
              :disable="!selectedStep"
              @click="selectedStep && addField(selectedStep)"
            />
          </q-card-section>
          <q-separator />
          <q-card-section v-if="selectedStep">
            <div class="row q-col-gutter-md q-mb-md">
              <div class="col-12 col-md-6">
                <q-input v-model="selectedStep.name" label="Nombre del paso" outlined />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="selectedStep.icon" label="Icono (Quasar)" outlined />
              </div>
            </div>

            <div class="q-gutter-md">
              <q-card
                v-for="(field, index) in selectedStep.inscriptionData"
                :key="`${selectedStep.order}-${index}`"
                bordered
              >
                <q-card-section class="row items-start justify-between q-col-gutter-sm">
                  <div class="col-12 col-md-4">
                    <q-select
                      v-model="field.type"
                      :options="fieldTypeOptions"
                      label="Tipo de campo"
                      outlined
                      emit-value
                      map-options
                    />
                  </div>
                  <div class="col-12 col-md-6">
                    <q-input v-model="field.label" label="Etiqueta" outlined />
                  </div>
                  <div class="col-12 col-md-2 text-right">
                    <q-btn
                      dense
                      flat
                      round
                      icon="delete"
                      color="negative"
                      @click="removeField(selectedStep, index)"
                    />
                  </div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                  <div v-if="field.type === 'SELECT'">
                    <div class="row items-center q-col-gutter-sm">
                      <div class="col">
                        <q-input
                          v-model="field.newOption"
                          label="Nueva opción"
                          outlined
                          @keyup.enter="addOption(field)"
                        />
                      </div>
                      <div class="col-auto">
                        <q-btn color="primary" icon="add" label="Agregar" @click="addOption(field)" />
                      </div>
                    </div>
                    <div v-if="field.options.length" class="q-mt-sm row q-col-gutter-sm">
                      <q-chip
                        v-for="(option, optionIndex) in field.options"
                        :key="`${option}-${optionIndex}`"
                        color="primary"
                        text-color="white"
                        removable
                        @remove="removeOption(field, optionIndex)"
                      >
                        {{ option }}
                      </q-chip>
                    </div>
                    <div v-else class="text-caption text-grey-6 q-mt-sm">
                      Añade opciones para este selector.
                    </div>
                  </div>
                  <div class="text-caption text-grey-6 q-mt-sm">
                    {{ field.type === 'STRING' ? 'Campo de texto libre.' : field.type === 'NUMBER' ? 'Solo números.' : 'El usuario seleccionará una opción.' }}
                  </div>
                </q-card-section>
              </q-card>

              <div v-if="selectedStep.inscriptionData.length === 0" class="text-grey-6">
                Añade campos para este paso.
              </div>
            </div>
          </q-card-section>
          <q-card-section v-else class="text-center text-grey-6">
            Selecciona un paso para editar su configuración.
          </q-card-section>
        </q-card>

        <q-card bordered class="q-mt-lg">
          <q-card-section>
            <div class="text-h6 text-weight-bold">Resumen rápido</div>
            <div class="text-caption text-grey-6">Vista general de la estructura configurada.</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-timeline color="primary">
              <q-timeline-entry
                v-for="step in steps"
                :key="`summary-${step.order}`"
                :title="step.name"
                :subtitle="`${step.inscriptionData.length} campos`"
                :icon="step.icon"
              >
                <q-item-label caption>
                  Orden {{ step.order }} · {{ step.inscriptionData.map((field) => field.label).join(', ') || 'Sin campos aún' }}
                </q-item-label>
              </q-timeline-entry>
            </q-timeline>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
