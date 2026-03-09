<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { CampusTypeApi, type CampusType } from 'src/api/CampusTypeApi';

const loading = ref(false);
const saving = ref(false);
const error = ref('');

const campusTypes = ref<CampusType[]>([]);
const selectedId = ref<string | null>(null);

const form = ref<CampusType>({
  name: '',
  price: 0,
  startDate: '',
  endDate: '',
  active: true,
});

const isEditing = computed(() => !!selectedId.value);

const resetForm = () => {
  selectedId.value = null;
  form.value = {
    name: '',
    price: 0,
    startDate: '',
    endDate: '',
    active: true,
  };
};

const loadCampusTypes = async () => {
  loading.value = true;
  error.value = '';
  try {
    campusTypes.value = await CampusTypeApi.list();
  } catch (err: any) {
    error.value = err?.message || 'No se pudieron cargar los tipos de campus.';
  } finally {
    loading.value = false;
  }
};

const editCampusType = (type: CampusType) => {
  selectedId.value = type._id || null;
  form.value = {
    name: type.name,
    price: type.price,
    startDate: type.startDate?.substring(0, 10),
    endDate: type.endDate?.substring(0, 10),
    active: type.active,
  };
};

const saveCampusType = async () => {
  saving.value = true;
  error.value = '';
  try {
    const payload = {
      name: form.value.name,
      price: Number(form.value.price),
      startDate: form.value.startDate,
      endDate: form.value.endDate,
      active: form.value.active,
    };

    if (selectedId.value) {
      await CampusTypeApi.update(selectedId.value, payload);
    } else {
      await CampusTypeApi.create(payload);
    }

    await loadCampusTypes();
    resetForm();
  } catch (err: any) {
    error.value = err?.message || 'No se pudo guardar el tipo de campus.';
  } finally {
    saving.value = false;
  }
};

const deleteCampusType = async (type: CampusType) => {
  if (!type._id) return;
  saving.value = true;
  error.value = '';
  try {
    await CampusTypeApi.remove(type._id);
    await loadCampusTypes();
    if (selectedId.value === type._id) {
      resetForm();
    }
  } catch (err: any) {
    error.value = err?.message || 'No se pudo eliminar el tipo de campus.';
  } finally {
    saving.value = false;
  }
};

onMounted(() => {
  loadCampusTypes();
});
</script>

<template>
  <q-page class="q-pa-lg">
    <div class="row items-center justify-between q-mb-md">
      <div>
        <div class="text-h5 text-weight-bold">
          Tipos de campus
        </div>
        <div class="text-subtitle2 text-grey-7">
          Gestiona los tipos de campus (nombre, precio, fechas y estado).
        </div>
      </div>
      <q-btn color="primary" icon="add" label="Nuevo tipo" @click="resetForm" />
    </div>

    <div v-if="error" class="text-negative q-mb-sm">
      {{ error }}
    </div>

    <div class="row q-col-gutter-xl">
      <div class="col-12 col-md-7">
        <q-card bordered>
          <q-card-section class="row items-center justify-between">
            <div class="text-h6 text-weight-bold">
              Lista de tipos
            </div>
            <q-btn flat icon="refresh" :loading="loading" @click="loadCampusTypes" />
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-table
              flat
              :rows="campusTypes"
              :columns="[
                { name: 'name', label: 'Nombre', field: 'name', align: 'left', sortable: true },
                { name: 'price', label: 'Precio (€)', field: 'price', align: 'right', sortable: true },
                { name: 'startDate', label: 'Inicio', field: 'startDate', align: 'left', sortable: true },
                { name: 'endDate', label: 'Fin', field: 'endDate', align: 'left', sortable: true },
                { name: 'active', label: 'Activo', field: 'active', align: 'center' },
                { name: 'actions', label: 'Acciones', field: 'actions', align: 'right' },
              ]"
              row-key="_id"
              :loading="loading"
            >
              <template #body-cell-price="props">
                <q-td :props="props">
                  {{ props.row.price.toFixed(2) }} €
                </q-td>
              </template>

              <template #body-cell-startDate="props">
                <q-td :props="props">
                  {{ props.row.startDate ? props.row.startDate.substring(0, 10) : '-' }}
                </q-td>
              </template>

              <template #body-cell-endDate="props">
                <q-td :props="props">
                  {{ props.row.endDate ? props.row.endDate.substring(0, 10) : '-' }}
                </q-td>
              </template>

              <template #body-cell-active="props">
                <q-td :props="props">
                  <q-badge :color="props.row.active ? 'positive' : 'grey'">
                    {{ props.row.active ? 'Activo' : 'Inactivo' }}
                  </q-badge>
                </q-td>
              </template>

              <template #body-cell-actions="props">
                <q-td :props="props">
                  <q-btn flat dense icon="edit" color="primary" @click="editCampusType(props.row)" />
                  <q-btn
                    flat
                    dense
                    icon="delete"
                    color="negative"
                    @click="deleteCampusType(props.row)"
                  />
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-5">
        <q-card bordered>
          <q-card-section>
            <div class="text-h6 text-weight-bold">
              {{ isEditing ? 'Editar tipo de campus' : 'Nuevo tipo de campus' }}
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="q-gutter-md">
              <q-input
                v-model="form.name"
                label="Nombre"
                outlined
                :rules="[val => !!val || 'Obligatorio']"
              />
              <q-input
                v-model.number="form.price"
                label="Precio (€)"
                type="number"
                outlined
                :rules="[val => val >= 0 || 'Debe ser mayor o igual que 0']"
              />
              <q-input
                v-model="form.startDate"
                label="Fecha de inicio"
                type="date"
                outlined
                :rules="[val => !!val || 'Obligatorio']"
              />
              <q-input
                v-model="form.endDate"
                label="Fecha de fin"
                type="date"
                outlined
                :rules="[val => !!val || 'Obligatorio']"
              />
              <q-toggle v-model="form.active" label="Activo" />
            </div>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right">
            <q-btn flat label="Cancelar" @click="resetForm" />
            <q-btn
              color="primary"
              :label="isEditing ? 'Guardar cambios' : 'Crear tipo'"
              :loading="saving"
              @click="saveCampusType"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

