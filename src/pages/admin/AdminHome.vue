<template>
  <q-page class="q-pa-lg">
    <div class="text-h5 text-weight-bold q-mb-md">
      Panel administrativo
    </div>

    <div class="row q-col-gutter-lg q-mb-lg">
      <div class="col-12 col-md-4" v-for="stat in seasonStats" :key="stat.season">
        <q-card bordered>
          <q-card-section>
            <div class="text-overline text-grey-6">
              Inscripciones
            </div>
            <div class="text-h6 text-weight-bold">
              {{ stat.season }}
            </div>
            <div class="text-h4 text-primary">
              {{ stat.count }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <q-card bordered>
          <q-card-section>
            <div class="text-h6 text-weight-bold">
              Mensajes de contacto no leídos
            </div>
            <div class="text-caption text-grey-6">
              Últimas consultas recibidas
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pt-none">
            <q-list separator>
              <q-item v-for="message in unreadMessages" :key="message.id">
                <q-item-section>
                  <q-item-label>{{ message.name }}</q-item-label>
                  <q-item-label caption>{{ message.subject }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-badge color="negative" align="middle">
                    {{ message.hours }} h
                  </q-badge>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12">
        <q-card bordered>
          <q-card-section>
            <div class="text-h6 text-weight-bold">
              Subscripciones activas
            </div>
            <div class="text-caption text-grey-6">
              Seguimiento de newsletter y alertas
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pt-none">
            <q-list separator>
              <q-item v-for="subscription in subscriptions" :key="subscription.id">
                <q-item-section>
                  <q-item-label>{{ subscription.email }}</q-item-label>
                  <q-item-label caption>{{ subscription.plan }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-badge color="primary" align="middle">
                    {{ subscription.status }}
                  </q-badge>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const seasonStats = [
  { season: 'Primavera 2024', count: 128 },
  { season: 'Verano 2024', count: 214 },
  { season: 'Otoño 2024', count: 96 },
];

const unreadMessages = [
  { id: 1, name: 'Laura Gómez', subject: 'Dudas sobre horarios', hours: 2 },
  { id: 2, name: 'Carlos Ruiz', subject: 'Preinscripción categoría 2012', hours: 5 },
  { id: 3, name: 'Natalia Pérez', subject: 'Solicitud de beca', hours: 8 },
];

const subscriptions = [
  { id: 1, email: 'familia.rodriguez@email.com', plan: 'Newsletter semanal', status: 'Activa' },
  { id: 2, email: 'info@clubfemenino.es', plan: 'Alertas de campus', status: 'Activa' },
  { id: 3, email: 'marina.crespo@email.com', plan: 'Eventos y promociones', status: 'Pendiente' },
];
</script>
