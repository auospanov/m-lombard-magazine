<template>
  <div id="app">
    <AppHeader />
      <router-view :key="$route.fullPath" />
    <AppFooter />
  </div>
</template>

<script>

import AppHeader from './components/app/AppHeader';
import AppFooter from './components/app/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
