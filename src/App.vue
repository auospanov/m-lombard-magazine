<template>
  <div id="app">
    <AppHeader />
      <router-view :key="$route.fullPath" />
    <AppFooter />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import AppHeader from './components/app/AppHeader';
import AppFooter from './components/app/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  mounted() {
    this.INIT_CUSTOMER_ID();
    this.INIT_CART();
  },
  methods: mapActions(['INIT_CUSTOMER_ID', 'INIT_CART']),
};
</script>
