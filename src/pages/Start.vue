<script setup lang="ts">
import { ref } from 'vue';

const loginEmail = ref('');
const loginPassword = ref('');
const rememberMe = ref(false);
</script>

<template>
  <section class="relative h-[80vh] flex items-center justify-center overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('img/Coach_teaching_young_players_c8a943a8.png');"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
    <div class="relative z-10 w-full">
      <div class="max-w-6xl mx-auto px-4 md:px-6">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="text-white space-y-6">
            <div class="space-y-3">
              <p class="text-secondary text-sm font-bold">Bienvenido</p>
              <h1 class="text-3xl md:text-4xl font-black">
                Acceso administrativo
              </h1>
            </div>
            <p class="text-white/90 text-lg max-w-xl">
              Área de gestión interna para el equipo administrativo del Campus Cata Coll.
            </p>
            <div class="grid sm:grid-cols-2 gap-4">
              <div class="shadcn-card rounded-xl border border-white/10 bg-black/40 text-white shadow-sm p-4">
                <q-icon name="sports_soccer" size="2em" color="secondary" class="mb-3" />
                <p class="font-bold mb-1">Gestión de usuarios</p>
                <p class="text-sm text-white/80">Controla accesos y datos clave del campus.</p>
              </div>
              <div class="shadcn-card rounded-xl border border-white/10 bg-black/40 text-white shadow-sm p-4">
                <q-icon name="event_available" size="2em" color="secondary" class="mb-3" />
                <p class="font-bold mb-1">Operaciones diarias</p>
                <p class="text-sm text-white/80">Coordina horarios, avisos y novedades internas.</p>
              </div>
            </div>
          </div>
          <div class="shadcn-card rounded-xl border bg-card border-card-border text-card-foreground shadow-sm p-8">
            <div class="text-center mb-6">
              <h2 class="text-2xl font-black mb-2">Iniciar sesión</h2>
              <p class="text-sm text-muted-foreground">Solo para administradores autorizados</p>
            </div>
            <q-form class="space-y-5">
              <q-input v-model="loginEmail" filled label="Correo electrónico" type="email" />
              <q-input v-model="loginPassword" filled label="Contraseña" type="password" />
              <div class="flex items-center justify-between text-sm text-muted-foreground">
                <q-checkbox v-model="rememberMe" label="Recordarme" />
                <a href="#" class="text-secondary font-bold">¿Olvidaste la contraseña?</a>
              </div>
              <q-btn
                label="Entrar"
                color="secondary"
                text-color="black"
                class="font-bold-btn w-full"
              />
              <div class="text-center text-sm text-muted-foreground">
                Si necesitas acceso, contacta con el responsable del campus.
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
