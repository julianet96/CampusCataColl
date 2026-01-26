import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'campus', name: 'campus', component: () => import('pages/Campus.vue') },
      { path: 'galery', name: 'galery', component: () => import('pages/Galery.vue') },
      { path: 'contact', name: 'contact', component: () => import('pages/Contacto.vue') },
      { path: 'inscription', name: 'inscription', component: () => import('pages/Inscription.vue') },
      { path: 'start', name: 'start', component: () => import('pages/Login.vue') },
    ],
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: 'admin.home', component: () => import('pages/admin/AdminHome.vue') },
      {
        path: 'inscriptions',
        name: 'admin.inscriptions',
        component: () => import('pages/admin/AdminInscriptions.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
