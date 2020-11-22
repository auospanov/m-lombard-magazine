<template>
  <section class="page-not-found">
    <div class="container">
      <h1 class="h1">404</h1>
      <p>Страница не найдена</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageNotFound',
};
</script>

<style lang="scss">
  .page-not-found {
      padding: 0;
      margin: 190px 0 0;

    @media screen and (max-width: 768px) {
      .page-not-found {
        margin: 200px 0 0;
      }
    }
  }
</style>
