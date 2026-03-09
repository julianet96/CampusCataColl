<script setup lang="ts">
import { Ref, ref, onMounted, computed, watch, nextTick } from 'vue';
import { inscriptionData, inscriptionStape } from 'src/entity/inscriptions';
import { InscriptionConfigApi } from 'src/api/InscriptionConfigApi';
import { CampusTypeApi, type CampusType } from 'src/api/CampusTypeApi';
import { PaymentsApi } from 'src/api/PaymentsApi';
import {
  loadStripe,
  type Stripe,
  type StripeElements,
  type StripeCardNumberElement,
  type StripeCardExpiryElement,
  type StripeCardCvcElement,
} from '@stripe/stripe-js';

const step = ref(1);
const total = ref<number>(0);
const form1 = ref();
const form2 = ref();
const inscription = ref<inscriptionData>({} as inscriptionData);
const steps = ref<inscriptionStape[]>([]);

const campusTypes = ref<CampusType[]>([]);
const selectedCampusTypeId = ref<string | null>(null);

const isProcessingPayment = ref(false);
const paymentError = ref<string | null>(null);
const paymentSuccess = ref(false);

const stripe = ref<Stripe | null>(null);
const elements = ref<StripeElements | null>(null);
const cardNumberElement = ref<StripeCardNumberElement | null>(null);
const cardExpiryElement = ref<StripeCardExpiryElement | null>(null);
const cardCvcElement = ref<StripeCardCvcElement | null>(null);
const cardMounted = ref(false);

const stripePublicKey = process.env.STRIPE_PUBLIC_KEY as string | undefined;

const activeCampusTypes = computed(() =>
  campusTypes.value.filter((type) => type.active),
);

const selectedCampusType = computed(
  () => activeCampusTypes.value.find((type) => type._id === selectedCampusTypeId.value) || null,
);

const campusStepOrder = computed(() => (steps.value?.length || 0) + 1);
const paymentStepOrder = computed(() => campusStepOrder.value + 1);

const displaySteps = computed<inscriptionStape[]>(() => [
  ...steps.value,
  {
    name: 'Tipo de campus',
    icon: 'event',
    order: campusStepOrder.value,
    inscriptionData: [],
  } as inscriptionStape,
  {
    name: 'Pago',
    icon: 'credit_card',
    order: paymentStepOrder.value,
    inscriptionData: [],
  } as inscriptionStape,
]);

const isStepValid = (inscrip: inscriptionStape): boolean => {
  // Paso dinámico de formulario
  if (
    inscrip.order !== campusStepOrder.value &&
    inscrip.order !== paymentStepOrder.value
  ) {
    return (inscrip.inscriptionData || []).every((field: any) => {
      const value = (field as any).value;
      if (field.type === 'NUMBER') {
        return value !== null && value !== undefined && value !== '' && !Number.isNaN(Number(value));
      }
      return value !== null && value !== undefined && String(value).trim() !== '';
    });
  }

  // Paso de selección de tipo de campus
  if (inscrip.order === campusStepOrder.value) {
    return !!selectedCampusTypeId.value;
  }

  // Paso de pago: no hay "Siguiente", así que siempre true
  return true;
};

const nextStep = async (inscrip: inscriptionStape) => {
  if (!isStepValid(inscrip)) {
    paymentError.value = 'Por favor, completa todos los campos obligatorios antes de continuar.';
    return;
  }

  if (step.value < paymentStepOrder.value) {
    step.value++;
  }
};

const mountCardElement = async () => {
  if (cardMounted.value) {
    return;
  }
  if (!stripePublicKey) {
    paymentError.value = 'No está configurada la clave pública de Stripe.';
    return;
  }

  if (!stripe.value) {
    stripe.value = await loadStripe(stripePublicKey);
  }

  if (!stripe.value) {
    paymentError.value = 'No se pudo inicializar Stripe.';
    return;
  }

  if (!elements.value) {
    elements.value = stripe.value.elements();
  }

  if (!elements.value) {
    paymentError.value = 'No se pudieron cargar los elementos de pago.';
    return;
  }

  const numberMount = document.getElementById('card-number-element');
  const expiryMount = document.getElementById('card-expiry-element');
  const cvcMount = document.getElementById('card-cvc-element');

  if (!numberMount || !expiryMount || !cvcMount) {
    return;
  }

  cardNumberElement.value = elements.value.create('cardNumber');
  cardExpiryElement.value = elements.value.create('cardExpiry');
  cardCvcElement.value = elements.value.create('cardCvc');

  cardNumberElement.value.mount('#card-number-element');
  cardExpiryElement.value.mount('#card-expiry-element');
  cardCvcElement.value.mount('#card-cvc-element');

  cardMounted.value = true;
};

const startStripePayment = async () => {
  if (!selectedCampusType.value) {
    paymentError.value = 'Debes seleccionar un tipo de campus antes de pagar.';
    return;
  }
  if (!stripe.value || !elements.value || !cardNumberElement.value) {
    paymentError.value = 'El formulario de pago aún no está listo. Inténtalo de nuevo en unos segundos.';
    return;
  }

  paymentError.value = null;
  paymentSuccess.value = false;
  isProcessingPayment.value = true;

  try {
    const { clientSecret } = await PaymentsApi.createPaymentIntent({
      amount: selectedCampusType.value.price,
      currency: 'eur',
      description: `Inscripción al campus: ${selectedCampusType.value.name}`,
    });

    const result = await stripe.value.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardNumberElement.value,
      },
    });

    if (result.error) {
      console.error('Error en el pago con Stripe', result.error);
      paymentError.value = result.error.message || 'No se pudo completar el pago.';
    } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
      paymentSuccess.value = true;
    } else {
      paymentError.value = 'El pago no se pudo completar. Inténtalo de nuevo.';
    }
  } catch (error) {
    console.error('Error iniciando pago con Stripe', error);
    paymentError.value = 'Ocurrió un error al iniciar el pago. Inténtalo de nuevo.';
  } finally {
    isProcessingPayment.value = false;
  }
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

watch(step, async (current) => {
  if (current === paymentStepOrder.value) {
    await nextTick();
    await mountCardElement();
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
                        :header-nav="false"
                        >

                        <q-step
                            v-for="(cmpStep, i) in displaySteps"
                            :key="cmpStep.order"
                            :name="cmpStep.order"
                            :title="cmpStep.name"
                            :icon="cmpStep.icon"
                            :done="step > i"
                        >
                            <div v-if="cmpStep.order !== campusStepOrder && cmpStep.order !== paymentStepOrder">
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
                            <div v-else-if="cmpStep.order === campusStepOrder" class="q-mt-lg">
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

                            <!-- Step final: Pago con Stripe -->
                            <div v-else-if="cmpStep.order === paymentStepOrder" class="q-mt-lg">
                              
                              <div class="q-mb-md">

                                <div class="payment-card">
                                  <div class="payment-card__header">
                                    <div class="payment-card__tab payment-card__tab--active">
                                      <q-icon name="credit_card" size="16px" class="q-mr-xs" />
                                      <span>Tarjeta</span>
                                    </div>
                                  </div>

                                  <div class="payment-card__body">
                                    <div class="payment-card__fields">
                                      <div class="payment-card__field payment-card__field--full">
                                        <label class="payment-card__label">Número de tarjeta</label>
                                        <div id="card-number-element" class="payment-card__stripe-wrapper"></div>
                                      </div>

                                      <div class="payment-card__field payment-card__field--half">
                                        <label class="payment-card__label">Fecha caducidad</label>
                                        <div id="card-expiry-element" class="payment-card__stripe-wrapper"></div>
                                      </div>

                                      <div class="payment-card__field payment-card__field--half">
                                        <label class="payment-card__label">CVC</label>
                                        <div id="card-cvc-element" class="payment-card__stripe-wrapper"></div>
                                      </div>
                                    </div>

                                    <p class="payment-card__hint">
                                      Tus datos de tarjeta se procesan de forma segura a través de Stripe.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div v-if="paymentError" class="text-negative q-mb-sm">
                                {{ paymentError }}
                              </div>
                              <div v-if="paymentSuccess" class="text-positive q-mb-sm">
                                Pago completado correctamente.
                              </div>
                              <q-btn
                                label="Pagar con tarjeta"
                                color="primary"
                                class="q-mt-sm"
                                :loading="isProcessingPayment"
                                :disable="!selectedCampusType || isProcessingPayment"
                                @click="startStripePayment"
                              />
                            </div>

                            <q-stepper-navigation>
                                <q-btn v-if="cmpStep.order > 1" label="Atrás" flat @click="step--" />
                                <q-btn
                                  v-if="cmpStep.order !== paymentStepOrder"
                                  label="Siguiente"
                                  color="primary"
                                  @click="nextStep(cmpStep)"
                                />
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
.payment-card {
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.06);
  overflow: hidden;
}

.payment-card__header {
  display: flex;
  align-items: center;
  padding: 8px 16px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.payment-card__tab {
  padding: 6px 14px;
  border-radius: 999px 999px 0 0;
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #64748b;
}

.payment-card__tab--active {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom-color: #ffffff;
  color: #111827;
}

.payment-card__body {
  padding: 12px 16px 16px;
}

.payment-card__fields {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 12px;
}

.payment-card__field {
  display: flex;
  flex-direction: column;
}

.payment-card__field--full {
  width: 100%;
}

.payment-card__field--half {
  width: 100%;
}

@media (min-width: 600px) {
  .payment-card__field--half {
    width: calc(50% - 6px);
  }
}

.payment-card__label {
  font-size: 12px;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 4px;
}

.payment-card__stripe-wrapper {
  padding: 17px 12px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
}

.payment-card__hint {
  margin-top: 8px;
  font-size: 11px;
  color: #64748b;
}
</style>