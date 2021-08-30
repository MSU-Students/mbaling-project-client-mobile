import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginForm.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 's/home', component: () => import('pages/student/StudentHome.vue') },
      { path: 'l/home', component: () => import('pages/landlord/LandlordHome.vue') },
      { path: 'search', component: () => import('pages/Search.vue') },
      { path: 'inbox', component: () => import('pages/Inbox.vue') },
      { path: 's/account', component: () => import('pages/student/StudentAccount.vue') },
      { path: 'l/account', component: () => import('pages/landlord/LandlordAccount.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
