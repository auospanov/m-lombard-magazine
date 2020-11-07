<template>
  <section class="cart-section">
    <div class="container">
      <div v-if="!cartCount" class="row">
        <div class="col-md-12">
          <div class="e-wrap">
            <h1 class="e-h1">Ваша корзина пуста</h1>
            <p class="e-p">
              Здесь хранятся товары, которые вы добавили в корзину. Сейчас ваша
              корзина пуста. Загляните в каталог или посмотрите ваши избранные
              товары.
            </p>
            <router-link to="/" tag="button" class="e-button">В каталог</router-link>
          </div>
        </div>
      </div>
      <template v-if="cartCount">
        <div class="row">
          <div class="col-md-12">
            <h1 class="cart-h1">
              В вашей корзине
              {{ cartCount }}
              {{ pluralize(cartCount, ['товар', 'товара', 'товаров']) }}
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-9">
            <div class="cart-subtitle-wrap">
              <h2 class="cart-sutitle">Товары доступные для заказа</h2>
            </div>
            <div v-for="cartItem in cart" :key="cartItem.ProductID" class="cart-items-wrap">
              <router-link :to="`/product/${cartItem.ProductID}`" class="cart-item-img">
                <img
                  src="@/assets/images/ring-1.jpeg"
                  alt="Часы наручные Talant 122.03.01.13.05"
                  class="cart-item-img"
                />
              </router-link>
              <div class="cart-item-art-n-name-wrap">
                <div class="cart-item-art">Арт. {{ cartItem.ProductID }}</div>
                <router-link :to="`/product/${cartItem.ProductID}`" class="cart-item-name">
                  {{ cartItem.ProductName }}
                </router-link>
              </div>
              <div class="cart-item-price">{{ prettyPrice(cartItem.Price) }} тг.</div>
              <div class="cart-item-delete">
                <button class="cart-item-delete-btn-wrap" @click="removeCartItem(cartItem.ProductID)">
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="cart-sidebar-wrap">
              <div class="cart-sidebar">
                <h4 class="cart-title">Стоимость заказа</h4>
                <div class="cart-sidebar-price-wrap">
                  <span class="cart-sidebar-preprice">
                    Цена за
                    {{ cartCount }}
                    {{ pluralize(cartCount, ['товар', 'товара', 'товара']) }}
                  </span>
                  <span class="cart-sidebar-preprice-2"> {{ prettyPrice(cartTotal) }} тг </span>
                </div>
                <!-- <div class="cart-sidebar-discount-wrap">
                  <span class="cart-sidebar-prediscount"> Скидка на товары </span>
                  <span class="cart-sidebar-prediscount-2"> -18 900 тг </span>
                </div> -->
                <hr />
                <div class="cart-sidebar-full-cost">
                  <span class="cart-sidebar-precost"> Итого </span>
                  <span class="cart-sidebar-precost-2"> {{ prettyPrice(cartTotal) }} тг </span>
                </div>
                <button class="cart-siebar-order e-button">Оформить заказ</button>
                <div class="cart-sidebar-order-wrap">
                  Итоговая стоимость указана без учета стоимости доставки,
                  промокодов, бонусных баллов и дополнительных скидок.
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { appLoader } from '@shared/utils/app-loader';
import { prettyPrice, pluralize } from '@shared/utils/text';

export default {
  name: 'Cart',
  computed: {
    ...mapState(['cart']),
    cartCount() {
      return this.cart && this.cart.length;
    },
    cartTotal() {
      return this.cart
        && this.cart.reduce((acc, cartItem) => acc + cartItem.Price, 0);
    },
  },
  methods: {
    ...mapActions(['REMOVE_CART_ITEM']),
    prettyPrice,
    pluralize,
    removeCartItem(productId) {
      appLoader.show();

      this.REMOVE_CART_ITEM({
        ProductNumber: productId,
      })
        .then(() => appLoader.hide());
    },
  },
};
</script>
