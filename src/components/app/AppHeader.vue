<template>
  <header>
    <!-- <div class="container-fluid">
      <div class="row">
        <div class="col-12 h-app-suggestion">
          <button class="h-app-suggestion__button">
            <i class="fas fa-times" aria-hidden="true"></i>
          </button>
          <span class="h-app-suggestion__text">
            Установите наше мобильное приложение!
          </span>
          <button class="h-app-suggestion__button">
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div> -->
    <div class="h-top">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-sm-2 col-2">
            <div id="burg">
              <span class="bar" id="top"></span>
              <span class="bar" id="middle"></span>
              <span class="bar" id="bottom"></span>
            </div>
          </div>
          <div class="col-md-10 col-sm-7 col-6">
            <div class="hl-lg-w">
              <a href="/" class="hl-lg-a">
                <img src="@/assets/images/logo-shop.png" alt="Магазин" />
              </a>
              <input type="text" class="hl-lg-input --desktop" placeholder="Поиск...">
              <img src="@/assets/images/logo-lombard.png" class="hl-lg-logo-lombard" alt="Ломбард" />
            </div>
          </div>
          <div class="col-md-2 col-sm-3 col-4">
            <div class="hr-w">
              <div class="hr-w-right">
                <router-link to="/favorites" class="header-favorites hr-w-ic-like">
                  <img src="@/assets/images/like.svg" alt="избранные" />
                  <span v-if="wishListCount" class="header-favorites__counter">{{ wishListCount }}</span>
                </router-link>
                <router-link to="/cart" class="header-cart hr-w-ic-cart">
                  <img src="@/assets/images/cart.svg" alt="корзина" />
                  <span v-if="cartCount" class="header-cart__counter">{{ cartCount }}</span>
                </router-link>
                <a href="/personal-cabinet" class="hr-w-ic-login">
                  <img src="@/assets/images/user.svg" alt="пользователь" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mobile-input-wrapper">
          <div class="col-12">
            <input type="text" class="hl-lg-input --mobile" placeholder="Поиск...">
          </div>
        </div>
      </div>
    </div>
    <div class="h-bot">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <nav>
              <ul v-if="categories" class="first-ul">
                <li
                  class="header-first-list"
                  v-for="category in categories"
                  :key="category.ID"
                >
                  <router-link :to="`/category/${category.ID}`">{{ category.Name }}</router-link>
                  <div v-if="category.ProductKinds && category.ProductKinds.length" class="dropdown">
                    <ul class="dropdown-menu">
                      <li
                        v-for="productKind in category.ProductKinds"
                        :key="productKind.ID" class="header-second-list"
                      >
                        <router-link :to="`/category/${category.ID}/${productKind.ID}`">
                          {{ productKind.Name }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-menu-wrapper">
      <div class="mobile-menu">
        <div class="mobile-menu__header">
          <button class="mobile-menu__button js-close-burger">
            <i class="fas fa-times" aria-hidden="true"></i>
          </button>
          <span class="mobile-menu__title">
            Меню
          </span>
        </div>
        <nav class="mobile-menu__nav">
          <ul v-if="categories" class="mobile-menu__list">
            <li class="mobile-menu__item">
              <a href="#" class="mobile-menu__link">Войти / зарегистрироваться</a>
            </li>
            <li
              class="mobile-menu__item"
              v-for="category in categories"
              :key="category.ID"
            >
              <a :href="`/category/${category.ID}`" class="mobile-menu__link">{{ category.Name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

import { appLoader } from '@shared/utils/app-loader';

export default {
  name: 'AppHeader',
  data() {
    return {
      categories: null,
    };
  },
  computed: {
    ...mapState(['cart', 'wishList']),
    cartCount() {
      const realCount = this.cart && this.cart.length;
      return Math.min(realCount, 99);
    },
    wishListCount() {
      const realCount = this.wishList && this.wishList.length;
      return Math.min(realCount, 99);
    },
  },
  mounted() {
    appLoader.show();

    axios.get('https://api.m-lombard.kz/getFilters')
      .then((res) => {
        this.categories = res.data.ProductCategoriesFilter;
        appLoader.hide();
      })
      .catch(() => appLoader.hide());
  },
};
</script>
