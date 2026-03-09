<script setup lang="ts">
import { Ref, ref, onMounted, computed, watch } from 'vue';
import { inscriptionData, inscriptionStape } from 'src/entity/inscriptions';
import { InscriptionConfigApi } from 'src/api/InscriptionConfigApi';
import { CampusTypeApi, type CampusType } from 'src/api/CampusTypeApi';

const step = ref(1);
const total = ref<number>(0);
const form1 = ref();
const form2 = ref();
const inscription = ref<inscriptionData>({} as inscriptionData);
const steps = ref<inscriptionStape[]>([]);

const campusTypes = ref<CampusType[]>([]);
const selectedCampusTypeId = ref<string | null>(null);

const activeCampusTypes = computed(() =>
  campusTypes.value.filter((type) => type.active),
);

const selectedCampusType = computed(
  () => activeCampusTypes.value.find((type) => type._id === selectedCampusTypeId.value) || null,
);

const campusStepOrder = computed(() => (steps.value?.length || 0) + 1);

const displaySteps = computed<inscriptionStape[]>(() => [
  ...steps.value,
  {
    name: 'Tipo de campus',
    icon: 'event',
    order: campusStepOrder.value,
    inscriptionData: [],
  } as inscriptionStape,
]);

const nextStep = async (inscrip: inscriptionStape) => {
  console.log(inscrip);
  step.value++;
};

watch(
  selectedCampusType,
  (type) => {
    total.value = type ? type.price : 0;
  },
  { immediate: true },
);

onMounted(async () => {
  try {
    const [config, types] = await Promise.all([
      InscriptionConfigApi.getConfig(),
      CampusTypeApi.list(),
    ]);
    steps.value = config.steps || [];
    campusTypes.value = types;
  } catch (error) {
    console.error('Error cargando configuración de inscripción o tipos de campus', error);
    steps.value = [];
    campusTypes.value = [];
  }
});
</script>

<template>
    <section class="py-16 md:py-24">
        <div class="max-w-6xl mx-auto px-4 md:px-6">
            <div class="text-center mb-12">
                <h1 class="text-3xl md:text-4xl font-black mb-4" > Inscripción</h1>
                <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Únete a nuestro campus y comienza tu viaje hacia la excelencia deportiva</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="md:col-span-2">
                     <q-stepper
                        v-model="step"
                        ref="stepper"
                        color="secondary"
                        animated
                        >

                         <q-step
                            v-for="(cmpStep, i) in displaySteps"
                            :key="cmpStep.order"
                            :name="cmpStep.order"
                            :title="cmpStep.name"
                            :icon="cmpStep.icon"
                            :done="step > i"
                        >
                            <div v-if="cmpStep.order !== campusStepOrder">
                              <div v-for="inscData in cmpStep.inscriptionData" :key="inscData.label">
                                  <q-input
                                      v-if="inscData.type == 'STRING'"
                                      v-model="inscData.value"
                                      :label="inscData.label"
                                      :rules="[val => !!val || 'Campo obligatorio']"
                                  />

                                  <q-input
                                      v-if="inscData.type == 'NUMBER'"
                                      v-model="inscData.value"
                                      :label="inscData.label"
                                      type="number"
                                      :rules="[val => !!val || 'Campo obligatorio']"
                                  />

                                  <q-select
                                      v-if="inscData.type == 'SELECT'"
                                      v-model="inscData.value"
                                      :label="inscData.label"
                                      :options="inscData.options"
                                  />
                              </div>
                            </div>

                            <!-- Step dedicado para selección de tipo de campus -->
                            <div v-else class="q-mt-lg">
                              <q-separator spaced />
                              <div class="text-h6 q-mb-sm">
                                Selecciona el tipo de campus
                              </div>

                              <q-option-group
                                v-model="selectedCampusTypeId"
                                type="radio"
                                :options="activeCampusTypes.map(type => ({
                                  label: `${type.name} · ${type.startDate?.substring(0, 10)} - ${type.endDate?.substring(0, 10)} · ${type.price} €`,
                                  value: type._id
                                }))"
                                :disable="activeCampusTypes.length === 0"
                              />

                              <div v-if="selectedCampusType" class="q-mt-md">
                                <div>
                                  <span class="font-bold">Fecha inicio:</span>
                                  {{ selectedCampusType.startDate?.substring(0, 10) }}
                                </div>
                                <div>
                                  <span class="font-bold">Fecha fin:</span>
                                  {{ selectedCampusType.endDate?.substring(0, 10) }}
                                </div>
                                <div class="text-lg q-mt-sm">
                                  <span class="font-bold">Precio:</span>
                                  {{ selectedCampusType.price }} €
                                </div>
                              </div>
                            </div>

                            <q-stepper-navigation>
                                <q-btn v-if="cmpStep.order > 1" label="Atrás" flat @click="step--" />
                                <q-btn label="Siguiente" color="primary" @click="nextStep(cmpStep)" />
                            </q-stepper-navigation>
                        </q-step>
                    </q-stepper>
                </div>
                <div class="md:col-span-1">
                    <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 sticky top-20">
                        <h3 class="text-lg font-bold mb-4">Resumen de Inscripción</h3>
                        <div class="space-y-4">
                            <div class="pt-4 border-t">
                                <div class="flex justify-between items-center">
                                    <span class="font-bold">Total</span>
                                    <span class="text-2xl font-black text-primary">{{ total }} €</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped lang="scss">

</style>