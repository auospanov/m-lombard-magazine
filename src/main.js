import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/reset.css';
import './assets/css/styles.css';

import './assets/js/main';

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
