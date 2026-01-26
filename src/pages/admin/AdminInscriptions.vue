<template>
  <q-page class="q-pa-lg">
    <div class="text-h5 text-weight-bold q-mb-md">
      Reservas generadas
    </div>

    <q-card bordered>
      <q-card-section>
        <div class="row q-col-gutter-md items-end">
          <div class="col-12 col-md-4">
            <q-input
              v-model="search"
              label="Buscar"
              outlined
              clearable
              dense
              placeholder="Nombre, email o categoría"
            >
              <template #append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-3">
            <q-input
              v-model="startDate"
              label="Desde"
              outlined
              dense
              type="date"
              clearable
            />
          </div>
          <div class="col-12 col-md-3">
            <q-input
              v-model="endDate"
              label="Hasta"
              outlined
              dense
              type="date"
              clearable
            />
          </div>
          <div class="col-12 col-md-2">
            <q-btn
              color="primary"
              label="Limpiar filtros"
              class="full-width"
              flat
              @click="clearFilters"
            />
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-pa-none">
        <q-table
          :rows="filteredRows"
          :columns="columns"
          row-key="id"
          flat
          dense
          no-data-label="No se encontraron reservas"
          class="q-ma-none"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue';

const search = ref('');
const startDate = ref('');
const endDate = ref('');

const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left', sortable: true },
  { name: 'name', label: 'Nombre', field: 'name', align: 'left', sortable: true },
  { name: 'email', label: 'Email', field: 'email', align: 'left' },
  { name: 'category', label: 'Categoría', field: 'category', align: 'left', sortable: true },
  { name: 'date', label: 'Fecha', field: 'date', align: 'left', sortable: true },
  { name: 'status', label: 'Estado', field: 'status', align: 'left' },
];

const rows = [
  {
    id: 'R-1023',
    name: 'María López',
    email: 'maria.lopez@email.com',
    category: 'Infantil 2014',
    date: '2024-05-05',
    status: 'Confirmada',
  },
  {
    id: 'R-1024',
    name: 'Andrés Silva',
    email: 'andres.silva@email.com',
    category: 'Juvenil 2011',
    date: '2024-05-08',
    status: 'Pendiente',
  },
  {
    id: 'R-1025',
    name: 'Valentina Cruz',
    email: 'valentina.cruz@email.com',
    category: 'Femenino 2009',
    date: '2024-05-12',
    status: 'Confirmada',
  },
  {
    id: 'R-1026',
    name: 'Tomás Herrera',
    email: 'tomas.herrera@email.com',
    category: 'Infantil 2015',
    date: '2024-05-14',
    status: 'En revisión',
  },
  {
    id: 'R-1027',
    name: 'Camila Torres',
    email: 'camila.torres@email.com',
    category: 'Juvenil 2010',
    date: '2024-05-18',
    status: 'Confirmada',
  },
  {
    id: 'R-1028',
    name: 'Diego Fernández',
    email: 'diego.fernandez@email.com',
    category: 'Femenino 2008',
    date: '2024-05-21',
    status: 'Cancelada',
  },
];

const filteredRows = computed(() => {
  const query = search.value.trim().toLowerCase();
  const start = startDate.value ? new Date(startDate.value) : null;
  const end = endDate.value ? new Date(endDate.value) : null;

  return rows.filter((row) => {
    const matchesSearch = query
      ? `${row.name} ${row.email} ${row.category}`.toLowerCase().includes(query)
      : true;

    const rowDate = new Date(row.date);
    const matchesStart = start ? rowDate >= start : true;
    const matchesEnd = end ? rowDate <= end : true;

    return matchesSearch && matchesStart && matchesEnd;
  });
});

const clearFilters = () => {
  search.value = '';
  startDate.value = '';
  endDate.value = '';
};
</script>
