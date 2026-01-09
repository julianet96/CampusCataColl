<script setup lang="ts">
import { ref} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from 'src/components/LanguageSwitcher.vue';

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

 const rightDrawerOpen = ref(false)
 const path = ref(route.path);

 

</script>

<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-primary text-white header" >
      <q-toolbar>
        <div class="header-container">
          <q-toolbar-title>
            <a href="/">
              <q-avatar square size="70px" class="navbar-avatar">
                <img src="/img/logo_amarillo-286x300.png">
              </q-avatar>
              <span class="navbar-title font-bold">Campus Cata Coll</span>
            </a>
          </q-toolbar-title>

          <div class="header-right-menu">
            <div>
              <nav>
                <router-link :to="{ name: 'home' }">
                  <q-item :class="route.path === '/' && 'active'" clickable v-ripple class="font-bold-btn">
                    <q-item-section>{{ t('header.home') }}</q-item-section>
                  </q-item>
                </router-link>
                <router-link :to="{ name: 'campus' }">
                  <q-item :class="route.path === '/campus' && 'active'" clickable v-ripple class="font-bold-btn">
                    <q-item-section>{{ t('header.campus') }}</q-item-section>
                  </q-item>
                </router-link>
                <router-link :to="{ name: 'home' }">
                  <q-item :class="route.path === '/galery' && 'active'" clickable v-ripple class="font-bold-btn">
                    <q-item-section>{{ t('header.galery') }}</q-item-section>
                  </q-item>
                </router-link>
                <router-link :to="{ name: 'home' }">
                  <q-item :class="route.path === '/contact' && 'active'" clickable v-ripple class="font-bold-btn">
                    <q-item-section>{{ t('header.contact') }}</q-item-section>
                  </q-item>
                </router-link>
                <router-link :to="{ name: 'home' }">
                  <q-item :class="route.path === '/inscription' && 'active' || 'resalted'" clickable v-ripple class="font-bold-btn">
                    <q-item-section>{{ t('header.inscription') }}</q-item-section>
                  </q-item>
                </router-link>
              </nav>

              <LanguageSwitcher />
            </div>

            <div>
              <q-btn dense flat round icon="menu" class="lt-md"
                @click="() => rightDrawerOpen = !rightDrawerOpen" unelevated />
            </div>
          </div>
        </div>
        
      </q-toolbar>
    </q-header>

     <q-drawer  v-model="rightDrawerOpen" side="left" bordered>
        <div class="mobile-menu-container">
          <nav class="dashboard-nav-mobile">
            <router-link :to="{ name: 'home'}">
              <q-btn flat :class="route.path === '/' ? 'selected' : ''" class="dashboard-nav-btn" >
                <div>
                  <q-icon name="directions_car" />
                  <span class="font-bold-btn">{{ t('header.home') }}</span>
                </div>
              </q-btn>
            </router-link>

            <router-link :to="{ name: 'campus' }">
              <q-btn flat :class="route.path === '/campus' ? 'selected' : ''" class="dashboard-nav-btn">
                <div>
                  <q-icon name="view_list" />
                  <span class="font-bold-btn">{{ t('header.campus') }}</span>
                </div>
              </q-btn>
            </router-link>

            <router-link :to="{ name: 'home' }">
              <q-btn flat :class="route.path === '/galeri' ? 'selected' : ''" class="dashboard-nav-btn">
                <div>
                  <q-icon name="view_list" />
                  <span class="font-bold-btn">{{ t('header.galery') }}</span>
                </div>
              </q-btn>
            </router-link>

            <router-link :to="{ name: 'home' }">
              <q-btn flat :class="route.path === '/contact' ? 'selected' : ''" class="dashboard-nav-btn">
                <div>
                  <q-icon name="view_list" />
                  <span class="font-bold-btn">{{ t('header.contact') }}</span>
                </div>
              </q-btn>
            </router-link>
             <router-link :to="{ name: 'home' }">
              <q-btn flat :class="route.path === '/inscription' ? 'selected' : ''" class="dashboard-nav-btn-inportant" >
                <div>
                  <q-icon name="view_list" />
                  <span class="font-bold-btn">{{ t('header.inscription') }}</span>
                </div>
              </q-btn>
            </router-link>
          </nav>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-9 text-white ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div
              className="flex items-center gap-2 mb-4 cursor-pointer hover-elevate px-2 py-1 rounded-md -ml-2"
            >
              <div className="w-12 justify-center">
               <img src="/img/logo_amarillo-286x300.png">
              </div>
              <span className="font-bold text-xl" >
                Campus Cata Coll
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Formando a la próxima generación de futbolistas con excelencia y pasión desde 2009
            </p>
            <p className="text-sm font-medium text-secondary">
              Más de 500 jóvenes futbolistas entrenados
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 titels" >
              El Campus
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-campus"
                >
                  Sobre Nosotros
                </button>
              </li>
              
              <li>
                <button
                  className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-facilities"
                >
                  Instalaciones
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-coaches"
                >
                  Entrenadores
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 titels" >
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-gallery"
                >
                  Galería
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-contact"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md -ml-2"
                  data-testid="link-footer-registration"
                >
                  Inscripción
                </button>
              </li>
              <li>
                <button className="text-muted-foreground hover:text-foreground hover-elevate px-2 py-1 rounded-md -ml-2">
                  Preguntas Frecuentes
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 titels" >
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe noticias y actualizaciones del campus
            </p>
            <div className="flex gap-2">
              <q-btn outline color="grey-5" icon="fa-brands fa-facebook-f"></q-btn>
              <q-btn outline color="grey-5" icon="fa-brands fa-instagram"></q-btn>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Campus Cata Coll. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <button className="hover:text-foreground hover-elevate px-2 py-1 rounded-md">
                Política de Privacidad
              </button>
              <button className="hover:text-foreground hover-elevate px-2 py-1 rounded-md">
                Términos y Condiciones
              </button>
              <button className="hover:text-foreground hover-elevate px-2 py-1 rounded-md">
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </div>


    </q-footer>

  </q-layout>
</template>
<style scoped lang="scss">
@use '../css/quasar.variables.scss' as v;
.navbar{
  max-width: 80rem;
   margin-left: auto; 
   margin-right: auto; 
   justify-items: center; 
   height: 4rem;
}

.header {
  height: v.$header-height;
  background: v.$gradient-primary;
  display: flex;
  align-items: center;
}

.elevated {
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
}

.resalted {
  background-color: v.$secondary !important;
  color: black;
}

.header>div:first-child {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-container {
  max-width: v.$max-width-page;
  padding: 0px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header-right-menu>div:first-child {
  display: flex;
  align-items: center;
  gap: 10px;

  .active {
    background-color: #424242;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 10px;

    div {
      border-radius: 50px;
    }

    a {
      text-decoration: none;
      font-size: 16px;
      color: white;
      font-weight: 500;
    }
  }
}

.header-right-menu>div:last-child {
  display: none;
}


.footer{
  max-width: 90rem;
  margin-left: auto; 
  margin-right: auto; 
  justify-items: center; 
}

.titels {
  font-size: 1.7rem !important;
    font-weight: 700 !important;
    font-family: Montserrat, sans-serif;
}


  .mobile-menu-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
    height: 100vh;
  }

  .mobile-menu-container>nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .mobile-menu-container>nav>a {
    border-radius: 50px;
    width: 100%;
    text-decoration: none;
    display: flex;
    gap: 10px;
    font-size: 15px;
    background-color: v.$bg;
  }

  .mobile-menu-container>nav>a div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .mobile-menu-container>nav>a i {
    font-size: 25px;
  }

  .mobile-menu-container>div {
    width: 100%;
    display: flex;
    gap: 20px;
  }

  .mobile-menu-container>button,
  .mobile-menu-container>a {
    width: 100%;
    display: flex;
  }

  .mobile-menu-container .selected {
    background: v.$dark_blue;
  }


   .dashboard-nav-mobile {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;

    .dashboard-nav-btn {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      border-radius: 30px;
      background: v.$bg;
      color: v.$dark_blue;

      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        padding: 5px;
      }
    }

    .dashboard-nav-btn-inportant {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 10px;
      border-radius: 30px;
      background: v.$secondary;
      color: v.$dark_blue;

      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
        padding: 5px;
      }
    }

    .selected {
      background: v.$dark_blue;
      color: white;
    }
  }

@media (max-width: 1024px) {
  .header {
    flex-direction: column;
  }

  .header>div:first-child {
    min-height: v.$header-height;
  }

  .header-right-menu>div:first-child {
    display: none;
  }

  .header-right-menu>div:last-child {
    display: flex;
  }
}

</style>