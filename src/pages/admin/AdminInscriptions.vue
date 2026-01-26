<template>
  <q-page class="q-pa-lg">
    <div class="text-h5 text-weight-bold q-mb-md">
      Reservas
    </div>
      <div class="flex justify-start">
      <div class="q-ma-md" style="border: solid 1px #E7D43D; border-radius: 5px;">
        <p class="q-ma-sm text-h5"></p>
        <q-input class="q-mx-sm" filled v-model="dateStartSelected" mask="date" :rules="['date']" label="Start date" style="max-width: 200px">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="dateStartSelected">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input class="q-mx-sm" filled v-model="dateEndSelected" mask="date" :rules="['date']" label="End date" style="max-width: 200px">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-date v-model="dateEndSelected">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      
        <q-btn class="full-width" @click="changeDay" :disable="loadingProviders" icon="search" label="Search" color="secondary" />
      </div>
  </div>

    <q-card bordered>
        <q-table
         bordered
        :rows="rows"
        :columns="columns"
        :filter="filter"
        row-key="name"
      >
       <template v-slot:top-right>
                <q-input borderless dense class="q-ml-auto mrt-input" v-model="search" placeholder="Search">
                    <template v-slot:append>
                        <q-icon name="search"></q-icon>
                    </template>
                </q-input>
            </template>

           

            <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                    <q-btn-group push unelevated>
                        <q-btn color="primary" icon="edit" @click="editAgency(props.row.uuid)" />
                        <q-btn color="secondary" icon="visibility" @click="viewAgencyUsers(props.row.uuid)" />
                    </q-btn-group>
                </q-td>
            </template>

      </q-table>
    </q-card>
  </q-page>
</template>

<script setup>
import { computed, ref } from 'vue';

const filter = ref()

const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left', sortable: true },
  { name: 'name', label: 'Nombre', field: 'name', align: 'left', sortable: true },
  { name: 'email', label: 'Email', field: 'email', align: 'left' },
  { name: 'category', label: 'Categoría', field: 'category', align: 'left', sortable: true },
  { name: 'date', label: 'Fecha', field: 'date', align: 'left', sortable: true },
  { name: 'status', label: 'Estado', field: 'status', align: 'left' },
  { name: 'actions', label: 'Actions', field: 'actions', align: 'center' },
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

</script>
