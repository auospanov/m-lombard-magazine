import Vue from 'vue';
import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

import { MUTATION_TYPES } from './mutations';
import { ACTION_TYPES } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customerId: localStorage.getItem('customerId') || null,
  },
  mutations: {
    [MUTATION_TYPES.SET_CUSTOMER_ID](state, payload) {
      state.customerId = payload;
    },
  },
  actions: {
    [ACTION_TYPES.INIT_CUSTOMER_ID]({ commit, state }) {
      if (!state.customerId) {
        const customerId = uuidv4();
        localStorage.setItem('customerId', customerId);
        commit(MUTATION_TYPES.SET_CUSTOMER_ID, customerId);
      }
    },
  },
});
