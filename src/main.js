import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/reset.css';
import './assets/scss/styles.scss';

import './assets/js/main';

import Vue from 'vue';

import Toasted from 'vue-toasted';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Toasted, { duration: 3000, type: 'error' });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
