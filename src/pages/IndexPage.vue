<script setup lang="ts">
import { ContactForm } from 'src/types/ContactType';
import { Ref, ref } from 'vue';



const contactForm = ref<ContactForm>({} as ContactForm)
</script>

<template>
  <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('img/Hero_children_playing_football_b8f8b734.png');"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4" style="font-family: Montserrat, sans-serif;"> CAMPUS CATA COLL</h1>
      <p class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" style="font-family: Montserrat, sans-serif;">Formamos a la próxima generación de futbolistas con entrenadores profesionales, instalaciones de primera clase y programas especializados</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center" style="height: 45px;">
        <q-btn label="INSCRIBETÉ AHORA"  color="secondary" text-color="black" class="font-bold-btn" ></q-btn>
        <q-btn label="GALERÍA"  color="accent" class="font-bold-btn"></q-btn>
      </div>
    </div>
  </section>
  <section class="py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <!-- Texto campus -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black mb-4" style="font-family: Montserrat, sans-serif;">Nuestro Campus</h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto" style="font-family: Montserrat, sans-serif;">Un entorno profesional diseñado para maximizar el potencial de cada jugador</p>
      </div>
      <!-- campus mas foto -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="space-y-6">
          <h3 class="text-2xl font-bold" style="font-family: Montserrat, sans-serif;">Excelencia en Formación Deportiva</h3>
          <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Nuestro campus ofrece una experiencia de formación integral que va más allá del fútbol. Desarrollamos valores como el trabajo en equipo, la disciplina y el respeto, mientras perfeccionamos las habilidades técnicas y tácticas de cada jugador.</p>
          <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Con más de 15 años de experiencia, hemos formado a cientos de jóvenes futbolistas, muchos de los cuales ahora juegan en equipos profesionales y academias de élite.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center" style="height: 45px;">
            <q-btn label="INSCRIBETÉ AHORA"  color="secondary" text-color="black" class="font-bold-btn" ></q-btn>
            <q-btn label="Mas información" color="positive" class="font-bold-btn"></q-btn>
          </div>
        </div>
        <div class="rounded-lg overflow-hidden">
          <img class="w-full h-full object-cover" src="img/Soccer_training_facility_field_28f51f97.png">
        </div>

      </div>
      <!-- Cartas -->
      <div class="grid lg:grid-cols-3 gap-6 mb-16">
        <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
          <div class="h-12 w-12 rounded-md bg-secondary flex items-center justify-center mb-4"> <q-icon name="workspace_premium" size="2.4em"></q-icon></div>
          <h3 class="text-xl font-bold mb-2" style="font-family: Montserrat, sans-serif;">Programas Especializados</h3>
          <p class="text-muted-foreground" style=" font-size: 17px;">Categorías adaptadas a todas las edades desde Sub-8 hasta Sub-18, con entrenamientos personalizados y desarrollo técnico-táctico.</p>
        </div>

        <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
          <div class="h-12 w-12 rounded-md bg-secondary flex items-center justify-center mb-4"> <q-icon name="download_done" size="2.4em"></q-icon></div>
          <h3 class="text-xl font-bold mb-2">Instalaciones de Primera</h3>
          <p class="text-muted-foreground" style=" font-size: 17px;">Campos de césped natural profesional, vestuarios modernos, sala de fitness y área de recuperación equipada.</p>
        </div>

        <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6">
          <div class="h-12 w-12 rounded-md bg-secondary flex items-center justify-center mb-4"> <q-icon name="sports_soccer" size="2.4em"></q-icon></div>
          <h3 class="text-xl font-bold mb-2" >Equipo Técnico Profesional</h3>
          <p class="text-muted-foreground" style=" font-size: 17px;">Entrenadores certificados con experiencia en fútbol profesional, preparadores físicos y nutricionistas deportivos.</p>
        </div>
      </div>
      <!-- Metodologia -->
      <div class="grid md:grid-cols-2 gap-8 mb-16">
        <div class="rounded-lg overflow-hidden order-2 md:order-1">
          <img class="w-full h-full object-cover" src="img/Coach_teaching_young_players_c8a943a8.png">
        </div>

        <div class="space-y-6 order-1 md:order-2 flex flex-col justify-center">
          <h3 class="text-2xl font-bold" style="font-family: Montserrat, sans-serif;">Metodología Profesional</h3>
          <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Aplicamos metodologías de entrenamiento utilizadas por academias de fútbol de élite europea, adaptadas a la realidad y necesidades de nuestros jóvenes jugadores.</p>
          <p class="text-muted-foreground leading-relaxed" style="font-family: Montserrat, sans-serif; font-size: 17px;">Cada sesión está cuidadosamente planificada para garantizar el desarrollo progresivo de habilidades técnicas, comprensión táctica y preparación física adecuada a cada edad.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center" style="height: 45px;">
            <q-btn label="INSCRIBETÉ AHORA"  color="secondary" text-color="black" class="font-bold-btn" ></q-btn>
            
          </div>
        </div>

      </div>

      <div class="rounded-lg overflow-hidden mb-16">
        <img class="w-full h-64 object-cover" src="img/Clean_modern_locker_room_eea1995d.png"/>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Carta1 -->
        <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
          <div class="flex justify-center mb-3"><q-icon name="download_done" color="secondary" size="2.4em"></q-icon></div>
          <div class="text-3xl font-black text-secondary mb-1" style="font-family: Montserrat, sans-serif;" >15+</div>
          <div class="text-sm text-muted-foreground"  style="font-family: Montserrat, sans-serif;">Años de Experiencia</div>
        </div>
        <!-- Carta2 -->
        <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
          <div class="flex justify-center mb-3"><q-icon name="group" color="secondary" size="2.4em"></q-icon></div>
          <div class="text-3xl font-black text-secondary mb-1" style="font-family: Montserrat, sans-serif;" >500+</div>
          <div class="text-sm text-muted-foreground"  style="font-family: Montserrat, sans-serif;">Estudiantes Formados</div>
        </div>
        <!-- Carta3 -->
        <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
          <div class="flex justify-center mb-3"><q-icon name="sports" color="secondary" size="2.4em"></q-icon></div>
          <div class="text-3xl font-black text-secondary mb-1" style="font-family: Montserrat, sans-serif;" >12</div>
          <div class="text-sm text-muted-foreground"  style="font-family: Montserrat, sans-serif;">Entrenadores Profesionales</div>
        </div>
        <!-- Carta4 -->
        <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-6 text-center">
          <div class="flex justify-center mb-3"><q-icon name="military_tech" color="secondary" size="2.4em"></q-icon></div>
          <div class="text-3xl font-black text-secondary mb-1" style="font-family: Montserrat, sans-serif;" >28</div>
          <div class="text-sm text-muted-foreground"  style="font-family: Montserrat, sans-serif;">Campeonatos Ganados</div>
        </div>
      </div>
    </div>
  </section>
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
