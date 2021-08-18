import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      quantity: 0
    };
  },
  getters,
  actions,
  mutations
};
