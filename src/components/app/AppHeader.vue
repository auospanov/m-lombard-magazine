<template>
  <header>
    <div class="h-top">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-lg-7 col-sm-2 col-2">
            <div id="burg">
              <span class="bar" id="top"></span>
              <span class="bar" id="middle"></span>
              <span class="bar" id="bottom"></span>
            </div>
          </div>
          <div class="col-md-7 col-lg-7 col-sm-6 col-6">
            <div class="hl-lg-w">
              <a href="/" class="hl-lg-a">
                <img src="@/assets/images/8jsg-_2k1.png" alt="логотип" />
              </a>
            </div>
          </div>
          <div class="col-md-5 col-sm-4 col-4">
            <div class="hr-w">
              <div class="hr-w-left">
                <div class="hr-sh-w">
                  <a href="/shops" class="hr-sh-a"> Магазины </a>
                </div>
                <div class="hr-lb-w">
                  <a href="#" class="hr-lb-a"> Ломбарды </a>
                </div>
              </div>
              <div class="hr-w-right">
                <a href="#" class="hr-w-ic-search">
                  <img src="@/assets/images/search.svg" alt="поиск" />
                </a>
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

    <div class="mobile-tab">
      <div class="hr-lc-w-mob">
        <div class="hr-sh-w">
          <a href="/shops" class="hr-sh-a"> Магазины </a>
        </div>
      </div>
      <div class="hr-lb-w-mob">
        <a href="#" class="hr-lb-a"> Ломбарды </a>
      </div>
      <div class="hr-lg-w-mob">
        <a href="/personal-cabinet" class="hr-w-ic-login">
          <img src="@/assets/images/user.svg" alt="пользователь" />
          Войти
        </a>
      </div>

      <nav id="mobile">
        <ul v-if="categories" class="mobile-ul">
          <li
            class="mobile-li header-second-list"
            v-for="category in categories"
            :key="category.ID"
          >
            <a
              :href="
                category.ProductKinds && category.ProductKinds.length
                  ? '#'
                  : `/category/${category.ID}`
              "
              class="mobile-a header-first-list-a"
              :class="{'dropdown-toggle': category.ProductKinds && category.ProductKinds.length}"
              :data-toggle="category.ProductKinds && category.ProductKinds.length ? 'dropdown' : ''"
            >
              {{ category.Name }}
            </a>
            <div v-if="category.ProductKinds && category.ProductKinds.length" class="dropdown-content">
              <ul class="dropdown-menu">
                <li
                  v-for="productKind in category.ProductKinds"
                  :key="productKind.ID" class="header-second-list"
                >
                  <a :href="`/category/${category.ID}/${productKind.ID}`">
                    {{ productKind.Name }}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
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
