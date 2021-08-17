import { createRouter, createWebHistory } from 'vue-router';

import Cards from './pages/cards/Cards.vue';
import Cart from './pages/cart/Cart.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/cards' },
    { path: '/cards', name: 'cards', component: Cards },
    { path: '/cart', name: 'cart', component: Cart }
  ],
  linkActiveClass: 'active'
});

export default router;
