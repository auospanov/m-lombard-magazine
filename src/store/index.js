import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { MUTATION_TYPES } from './mutations';
import { ACTION_TYPES } from './actions';

Vue.use(Vuex);

function getJsonFromLocalStorage(itemName, fallBack) {
  try {
    const parsed = JSON.parse(localStorage.getItem(itemName));
    return parsed || fallBack;
  } catch (err) {
    return fallBack;
  }
}

export default new Vuex.Store({
  state: {
    customerId: localStorage.getItem('app_customer_id') || null,
    cart: getJsonFromLocalStorage('app_cart', []),
    wishList: getJsonFromLocalStorage('app_wish_list', []),
  },
  mutations: {
    [MUTATION_TYPES.SET_CUSTOMER_ID](state, payload) {
      localStorage.setItem('app_customer_id', payload);
      state.customerId = payload;
    },
    [MUTATION_TYPES.SET_CART](state, payload) {
      localStorage.setItem('app_cart', JSON.stringify(payload));
      state.cart = payload;
    },
    [MUTATION_TYPES.SET_WISH_LIST](state, payload) {
      localStorage.setItem('app_wish_list', JSON.stringify(payload));
      state.wishList = payload;
    },
  },
  actions: {
    [ACTION_TYPES.INIT_CUSTOMER_ID]({ commit, state }) {
      if (!state.customerId) {
        const customerId = uuidv4();
        commit(MUTATION_TYPES.SET_CUSTOMER_ID, customerId);
      }
    },
    [ACTION_TYPES.INIT_CART]({ commit, state }) {
      axios.post('https://api.m-lombard.kz/basket', {
        CustomerIIN: '',
        CustomerID: state.customerId,
        OperationType: 'info',
        Products: [],
      })
        .then((res) => {
          commit(MUTATION_TYPES.SET_CART, res.data.ProductsInBasket);
        });
    },
    [ACTION_TYPES.ADD_CART_ITEM]({ commit, state }, payload) {
      return axios.post('https://api.m-lombard.kz/basket', {
        CustomerIIN: '',
        CustomerID: state.customerId,
        OperationType: 'add',
        Products: [payload],
      })
        .then((res) => {
          if (res.data.AnswerCode === 200) {
            commit(MUTATION_TYPES.SET_CART, res.data.ProductsInBasket);
          }
        });
    },
    [ACTION_TYPES.REMOVE_CART_ITEM]({ commit, state }, payload) {
      return axios.post('https://api.m-lombard.kz/basket', {
        CustomerIIN: '',
        CustomerID: state.customerId,
        OperationType: 'remove',
        Products: [payload],
      })
        .then((res) => {
          if (res.data.AnswerCode === 200) {
            commit(MUTATION_TYPES.SET_CART, res.data.ProductsInBasket);
          }
        });
    },
    [ACTION_TYPES.INIT_WISH_LIST]({ commit, state }) {
      axios.post('https://api.m-lombard.kz/WishList', {
        CustomerIIN: '',
        CustomerID: state.customerId,
        OperationType: 'info',
        Products: [],
      })
        .then((res) => {
          commit(MUTATION_TYPES.SET_WISH_LIST, res.data.Products);
        });
    },
    [ACTION_TYPES.ADD_WISH_LIST_ITEM]({ dispatch, state }, payload) {
      axios.post('https://api.m-lombard.kz/WishList', {
        CustomerIIN: '',
        CustomerID: state.customerId,
        OperationType: 'add',
        Products: [{
          ProductNumber: payload,
        }],
      })
        .then(() => {
          dispatch(ACTION_TYPES.INIT_WISH_LIST);
        });
    },
    [ACTION_TYPES.REMOVE_WISH_LIST_ITEM]({ dispatch, state }, payload) {
      axios.post('https://api.m-lombard.kz/WishList', {
        CustomerIIN: '',
        CustomerID: state.customerId,
        OperationType: 'remove',
        Products: [{
          ProductNumber: payload,
        }],
      })
        .then(() => {
          dispatch(ACTION_TYPES.INIT_WISH_LIST);
        });
    },
  },
});
