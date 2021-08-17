import { createRouter, createWebHistory } from 'vue-router';

import UserCart from './pages/UserCart.vue';
import ProductsList from './pages/ProductsList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/cart', name: 'cart', component: UserCart },
    { path: '/products', name: 'products', component: ProductsList }
  ],
  linkActiveClass: 'active'
});

export default router;
