<template>
  <div id="app">
    <AppHeader />
      <router-view/>
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
