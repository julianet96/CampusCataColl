<script setup lang="ts">
import { ContactForm } from 'src/types/ContactType';
import { Ref, ref } from 'vue';



const contactForm = ref<ContactForm>({} as ContactForm)
</script>

<template>
    <section class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black mb-4" style="font-family: Montserrat, sans-serif;">Contacto</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">¿Tienes preguntas? Estamos aquí para ayudarte</p>
      </div>
      <div class="grid md:grid-cols-5 gap-8">
        <div class="md:col-span-3">
          <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 md:p-8">
            <q-form class="space-y-6">
              <div class="space-y-2">
                <q-input filled v-model="contactForm.nombre" label="Nombre Completo"></q-input>
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <q-input filled v-model="contactForm.email" label="Email"></q-input>
                <q-input filled v-model="contactForm.telefono" label="Telefono"></q-input>
              </div>
              <div class="space-y-2">
                <q-input filled type="textarea" v-model="contactForm.mensage" label="Mensaje"></q-input>
              </div>
              <q-btn label="Enviar Mensaje"  color="secondary" text-color="black" class="font-bold-btn w-full" type="submit" ></q-btn>
            </q-form>

          </div>
        </div>
        <div class="md:col-span-2 space-y-6">
          <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
            <h3 class="text-xl font-bold mb-4">Información de Contacto</h3>
            <div class="space-y-4">
              <div class="flex gap-3">
                <q-icon name="phone_enabled" color="secondary" size="2.4em"></q-icon>
                <div>
                  <p class="font-medium">Teléfono</p>
                  <p class="text-sm text-muted-foreground">
                    +34 912 345 678
                  </p>
                  
                </div>
              </div>
              <div class="flex gap-3 mb-3">
                <q-icon name="mail" color="secondary" size="2.4em"></q-icon>
                <div>
                  <p class="font-medium">Email</p>
                  <p class="text-sm text-muted-foreground">
                    info@campusfutbol.com
                  </p>
                  
                </div>
              </div>


            </div>
          </div>
          <div class="shadcn-card rounded-xl border border-card-border text-card-foreground shadow-sm p-6 bg-card">
            <h3 class="text-lg font-bold mb-4">¿Necesitas Ayuda Inmediata?</h3>
            <p class="text-sm text-muted-foreground mb-4">Llámanos directamente para resolver tus dudas al instante</p>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<style scoped lang="scss">

</style>