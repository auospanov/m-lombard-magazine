<template>
  <section class="e-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="e-wrap">
            <h1 class="e-h1">Сейчас у вас ничего нет в избранном</h1>
            <p class="e-p">
              Здесь хранятся товары, которые вы добавили в избранное. Сейчас ваш спиоск избранных товаров пуст.
              Загляните в каталог или посмотрите вашу корзину товары.
            </p>
            <router-link to="/" tag="button" class="e-button">В каталог</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FavoritesEmpty',
};
</script>
