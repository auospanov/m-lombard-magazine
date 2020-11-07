<template>
  <div v-if="product" class="product-page">
    <section class="product-section">
      <div class="container">
        <div class="row">
          <div class="col-md-1 ord1">
            <div class="column-flex">
              <div class="column">
                <img
                  src="@/assets/images/ring-1.jpeg"
                  alt=""
                  class="my js-select-product-image"
                />
              </div>
              <div class="column">
                <img
                  src="@/assets/images/silver-1.jpeg"
                  alt=""
                  class="my js-select-product-image"
                />
              </div>
              <div class="column">
                <img
                  src="@/assets/images/watch-1.jpeg"
                  alt=""
                  class="my js-select-product-image"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6 ord2">
            <div class="product-img-wrap-container">
              <img
                src="@/assets/images/ring-1.jpeg"
                id="expandedImg"
                style="width: 100%"
                class="product-main-img js-open-product-modal"
              />
            </div>
          </div>

          <!-- <div class="col-md-5">
            <div class="product-img-wrap">
              <img src="@/assets/images/ring-1.jpeg" alt="Золотые кольца" class="product-main-img js-open-product-modal">
            </div>
          </div> -->

          <div class="col-md-5">
            <div class="product-wrap">
              <div class="product-first-line-wrap">
                <div class="product-article">Артикул: {{ product.ProductID }}</div>
                <!-- <div class="product-sale-percent">-30%</div> -->
              </div>
              <h1 class="h1">{{ product.Product }}</h1>
              <div class="product-price-wrap">
                <div class="product-price">{{ prettyPrice(product.Price) }} тг</div>
                <!-- <strike class="product-old-price">43 500 тг</strike> -->
              </div>

              <div class="product-add-to-cart-wrap">
                <button class="product-add-to-cart e-button" @click="addItemCart" :disabled="isExistInCart" >
                  <span v-if="isExistInCart">Товар в корзине</span>
                  <span v-if="!isExistInCart">Добавить в корзину</span>
                </button>
                <button v-if="isExistInCart" class="product-add-to-cart e-button" @click="removeItemCart">
                  Удалить из корзины
                </button>
                <div class="product-add-to-chosen">
                  <i
                    class="far fa-heart"
                    onclick="myFunction3(this)"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div class="product-buy-advantages-wrapper">
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/truck2.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Бесплатная доставка
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/jewelery.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Примерка перед покупкой
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/card-percentage.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Скидка при онлайн оплате
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/return.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Удобный возврат
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="myModall" class="modall">
      <span class="close cursor js-close-product-modal">&times;</span>
      <div class="modall-content">

        <div class="mySlides js-close-product-modal">
          <img src="@/assets/images/ring-1.jpeg" id="expandImgModal" class="full-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';

import { prettyPrice } from '@shared/utils/text';
import { appLoader } from '@shared/utils/app-loader';

// modal slider
function openModal() {
  document.getElementById('myModall').style.display = 'block';
}

function closeModal() {
  document.getElementById('myModall').style.display = 'none';
}

function selectImg(e) {
  const expandImg = document.getElementById('expandedImg');
  const expandImgModal = document.getElementById('expandImgModal');
  expandImg.src = e.target.src;
  expandImgModal.src = e.target.src;
  expandImg.parentElement.style.display = 'block';
}
// modal gallery

export default {
  name: 'Product',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: null,
    };
  },
  computed: {
    ...mapState(['cart']),
    isExistInCart() {
      return this.cart.some((cartItem) => cartItem.ProductID === this.product.ProductID);
    },
  },
  mounted() {
    this.fetchProduct();

    const openModalEl = document.querySelector('.js-open-product-modal');
    const cloadModalEls = document.querySelector('.js-open-product-modal');

    if (openModalEl && cloadModalEls && cloadModalEls.length > 0) {
      document.querySelector('.js-open-product-modal').addEventListener('click', openModal);

      document.querySelectorAll('.js-close-product-modal').forEach((closeModalEl) => {
        closeModalEl.addEventListener('click', closeModal);
      });
    }

    const selectProductImageEls = document.querySelectorAll('.js-select-product-image');

    if (selectProductImageEls && selectProductImageEls.length > 0) {
      document.querySelectorAll('.js-select-product-image').forEach((imageEl) => {
        imageEl.addEventListener('click', selectImg);
      });
    }
  },
  methods: {
    ...mapActions(['ADD_CART_ITEM', 'REMOVE_CART_ITEM']),
    prettyPrice,
    fetchProduct() {
      appLoader.show();

      axios.post('https://api.m-lombard.kz/GetProductByID', {
        CustomerIIN: '',
        CustomerID: '1',
        ProductID: this.id,
      })
        .then((res) => {
          if (res.data.AnswerCode !== 200) {
            this.$router.push({ name: 'PageNotFound' });
            return;
          }

          this.product = res.data.Product;
          appLoader.hide();
        });
    },
    addItemCart() {
      appLoader.show();

      this.ADD_CART_ITEM({
        ProductNumber: this.product.ProductID,
        ProductPrice: this.product.Price,
      })
        .then(() => appLoader.hide());
    },
    removeItemCart() {
      appLoader.show();

      this.REMOVE_CART_ITEM({
        ProductNumber: this.product.ProductID,
      })
        .then(() => appLoader.hide());
    },
  },
};
</script>
