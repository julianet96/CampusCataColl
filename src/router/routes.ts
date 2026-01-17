import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', name: 'home',  component: () => import('pages/IndexPage.vue') },
      { path: 'campus', name: 'campus',  component: () => import('pages/Campus.vue') },
      { path: 'galery', name: 'galery',  component: () => import('pages/Galery.vue') }
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
