import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { MUTATION_TYPES } from './mutations';
import { ACTION_TYPES } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customerId: localStorage.getItem('app_customerId') || null,
    cart: JSON.parse(localStorage.getItem('app_cart')) || null,
  },
  mutations: {
    [MUTATION_TYPES.SET_CUSTOMER_ID](state, payload) {
      localStorage.setItem('app_customerId', payload);
      state.customerId = payload;
    },
    [MUTATION_TYPES.SET_CART](state, payload) {
      localStorage.setItem('app_cart', JSON.stringify(payload));
      state.cart = payload;
    },
  },
  actions: {
    [ACTION_TYPES.INIT_CUSTOMER_ID]({ commit, state }) {
      if (!state.customerId) {
        const customerId = uuidv4();
        commit(MUTATION_TYPES.SET_CUSTOMER_ID, customerId);
      }
    },
    [ACTION_TYPES.INIT_CART]({ commit }) {
      axios.post('https://api.m-lombard.kz/basket', {
        CustomerIIN: '',
        CustomerID: '1',
        OperationType: 'info',
        Products: [],
      })
        .then((res) => {
          commit(MUTATION_TYPES.SET_CART, res.data.ProductsInBasket);
        });
    },
    [ACTION_TYPES.ADD_CART_ITEM]({ commit }, payload) {
      return axios.post('https://api.m-lombard.kz/basket', {
        CustomerIIN: '',
        CustomerID: '1',
        OperationType: 'add',
        Products: [payload],
      })
        .then((res) => {
          if (res.data.AnswerCode === 200) {
            commit(MUTATION_TYPES.SET_CART, res.data.ProductsInBasket);
          }
        });
    },
    [ACTION_TYPES.REMOVE_CART_ITEM]({ commit }, payload) {
      return axios.post('https://api.m-lombard.kz/basket', {
        CustomerIIN: '',
        CustomerID: '1',
        OperationType: 'remove',
        Products: [payload],
      })
        .then((res) => {
          if (res.data.AnswerCode === 200) {
            commit(MUTATION_TYPES.SET_CART, res.data.ProductsInBasket);
          }
        });
    },
  },
});
