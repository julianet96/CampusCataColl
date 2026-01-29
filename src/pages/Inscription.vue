<script setup lang="ts">
import { Ref, ref } from 'vue';
import { inscriptionData, inscriptionStape } from 'src/entity/inscriptions';


const step= ref(1)
const total = ref<number>(0)
const form1 = ref()
const form2 = ref()
const inscription = ref<inscriptionData>({} as inscriptionData)
const steps = ref<inscriptionStape[]>([])

const nextStep = async (inscrip:inscriptionStape) => {
  console.log(inscrip)
  step.value ++
}



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
                            v-for="(cmpStep, i) in steps"
                            :name="cmpStep.order"
                            :title="cmpStep.name"
                            :icon="cmpStep.icon"
                            :done="step > i"
                        >
                            <div v-for="inscData in cmpStep.inscriptionData">
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