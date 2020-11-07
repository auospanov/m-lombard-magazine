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
                <div class="hr-lc-w">
                  <a href="#" class="hr-lc-a js-open-city-modal">
                    <img src="@/assets/images/location.svg" alt="локация" />
                    <span>Алматы</span>
                  </a>
                </div>

                <!-- Модальное окно открывается при первом входе на сайт и спрашивает ваш ли это город -->
                <div class="hr-lc-dropdown" id="city_dropdown" style="display: none;">
                  <div class="hr-lc-dropdown-body">
                    <div class="hr-lc-dropdown-city-name">Алматы</div>
                    <div class="hr-lc-dropdown-ask">Это ваш город?</div>
                  </div>
                  <div class="hr-lc-dropdown-btns-wrap">
                    <button
                      id="yes_city"
                      class="hr-lc-dropdown-yes-btn hr-lc-dropdown-btns js-close-city-modal"
                    >
                      Да, верно
                    </button>
                    <button
                      class="hr-lc-dropdown-no-btn hr-lc-dropdown-btns js-next-city-modal"
                    >
                      Нет, другой
                    </button>
                  </div>
                </div>
                <!-- / Модальное окно открывается при первом входе на сайт и спрашивает ваш ли это город -->

                <!-- Модальное окно открывается после того что выше если пользователь нажмет кнопку нет, в модальном окне будет предложено выбрать его город -->
                <div class="hr-lc-dropdown-2" id="city_dropdown_2">
                  <div class="hr-lc-dropdown-2-input-wrap">
                    <p class="hr-lc-dropdown-2-city-input-p">
                      Введите название города
                    </p>
                    <input
                      type="text"
                      class="hr-lc-dropdown-2-city-input"
                      value=""
                    />
                  </div>
                  <div class="hr-lc-dropdown-2-cities-list-wrap">
                    <ul>
                      <li><a href="">Алматы</a></li>
                      <li><a href="">Нур-Султан</a></li>
                      <li><a href="">Талдыкорган</a></li>
                      <li><a href="">Караганда</a></li>
                      <li><a href="">Актау</a></li>
                      <li><a href="">Атырау</a></li>
                      <li><a href="">Актобе</a></li>
                      <li><a href="">Шымкент</a></li>
                      <li><a href="">Тараз</a></li>
                      <li><a href="">Павлодар</a></li>
                      <li><a href="">Петропавлск</a></li>
                      <li><a href="">Уральск</a></li>
                      <li><a href="">Усть-Каменогорск</a></li>
                      <li><a href="">Кокшетау</a></li>
                    </ul>
                  </div>
                  <div class="hr-lc-dropdown-2-find-city-auto-wrap">
                    <i class="far fa-dot-circle"></i>
                    <a href="" class="hr-lc-dropdown-2-find-city-auto-p"
                      >Определить автоматически</a
                    >
                  </div>
                </div>
                <!-- / Модальное окно открывается после того что выше если пользователь нажмет кнопку нет, в модальном окне будет предложено выбрать его город -->

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
                <a href="/favorites" class="hr-w-ic-like">
                  <img src="@/assets/images/like.svg" alt="избранные" />
                </a>
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
        <div class="hr-lc-w">
          <a href="#" class="hr-lc-a js-open-city-modal">
            <img src="@/assets/images/location.svg" alt="локация" />
            <span>Алматы</span>
          </a>

          <div class="hr-lc-dropdown-mob" id="city_dropdown_mob" style="display: none;">
            <div class="hr-lc-dropdown-body">
              <div class="hr-lc-dropdown-city-name">Алматы</div>
              <div class="hr-lc-dropdown-ask">Это ваш город?</div>
            </div>
            <div class="hr-lc-dropdown-btns-wrap">
              <button
                id="yes_city"
                class="hr-lc-dropdown-yes-btn hr-lc-dropdown-btns js-close-city-modal"
              >
                Да, верно
              </button>
              <button class="hr-lc-dropdown-no-btn hr-lc-dropdown-btns js-next-city-modal">
                Нет, другой
              </button>
            </div>
          </div>
        </div>
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

export default {
  name: 'AppHeader',
  data() {
    return {
      categories: null,
    };
  },
  computed: {
    ...mapState(['cart']),
    cartCount() {
      const realCount = this.cart && this.cart.length;
      return Math.min(realCount, 99);
    },
  },
  mounted() {
    axios.get('https://api.m-lombard.kz/getFilters')
      .then((res) => {
        this.categories = res.data.ProductCategoriesFilter;
      });
  },
};
</script>
