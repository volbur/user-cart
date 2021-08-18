import { createStore } from 'vuex';
import cartModule from './cart/index.js';
import productsModule from './products/index.js';

import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const store = createStore({
  modules: {
    cart: cartModule,
    products: productsModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  getters,
  actions,
  mutations
});

export default store;
