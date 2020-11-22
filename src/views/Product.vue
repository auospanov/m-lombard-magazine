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
                  class="my"
                  @click="selectImg"
                />
              </div>
              <div class="column">
                <img
                  src="@/assets/images/silver-1.jpeg"
                  alt=""
                  class="my"
                  @click="selectImg"
                />
              </div>
              <div class="column">
                <img
                  src="@/assets/images/watch-1.jpeg"
                  alt=""
                  class="my"
                  @click="selectImg"
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
                class="product-main-img js"
                @click="openModal"
              />
            </div>
          </div>

          <!-- <div class="col-md-5">
            <div class="product-img-wrap">
              <img src="@/assets/images/ring-1.jpeg" alt="Золотые кольца" class="product-main-img">
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
                <button class="product-add-to-cart e-button" @click="addCartItem" :disabled="isExistInCart" >
                  <span v-if="isExistInCart">Товар в корзине</span>
                  <span v-if="!isExistInCart">Добавить в корзину</span>
                </button>
                <div class="product-add-to-chosen" @click="toggleWishListItem">
                  <i
                    class="far fa-heart"
                    :class="{ 'fas': product.AtWishList }"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div class="product-buy-advantages-wrapper">
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/advantage-price-blue.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Лучшая <br/> цена
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/advantage-gold-blue.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                    Настоящее <br/> золото
                  </div>
                </div>
                <div class="product-buy-advantages-wrap">
                  <div class="products-buy-advantage">
                    <img
                      src="@/assets/images/advantage-free-blue.svg"
                      alt=""
                      class="product-buy-advantage-img"
                    />
                      Камни <br/> бесплатно
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="myModall" class="modall">
      <span class="close cursor" @click="closeModal">&times;</span>
      <div class="modall-content">

        <div class="mySlides" @click="closeModal">
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
    ...mapState(['customerId', 'cart']),
    isExistInCart() {
      return this.cart && this.cart.some((cartItem) => cartItem.ProductID === this.product.ProductID);
    },
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    ...mapActions([
      'ADD_CART_ITEM',
      'REMOVE_CART_ITEM',
      'ADD_WISH_LIST_ITEM',
      'REMOVE_WISH_LIST_ITEM',
    ]),
    prettyPrice,
    openModal() {
      document.getElementById('myModall').style.display = 'block';
    },
    closeModal() {
      document.getElementById('myModall').style.display = 'none';
    },
    selectImg(e) {
      const expandImg = document.getElementById('expandedImg');
      const expandImgModal = document.getElementById('expandImgModal');
      expandImg.src = e.target.src;
      expandImgModal.src = e.target.src;
      expandImg.parentElement.style.display = 'block';
    },
    fetchProduct() {
      appLoader.show();

      axios.post('https://api.m-lombard.kz/GetProductByID', {
        CustomerIIN: '',
        CustomerID: this.customerId,
        ProductID: this.id,
      })
        .then((res) => {
          if (res.data.AnswerCode !== 200) {
            this.$router.replace({ name: 'PageNotFound' });
            return;
          }

          this.product = res.data.Product;
          appLoader.hide();
        });
    },
    addCartItem() {
      appLoader.show();

      this.ADD_CART_ITEM({
        ProductNumber: this.product.ProductID,
        ProductPrice: this.product.Price,
      })
        .then(() => appLoader.hide())
        .catch((err) => {
          appLoader.hide();
          this.$toasted.show(err.message);
        });
    },
    toggleWishListItem() {
      this.product.AtWishList = !this.product.AtWishList;

      if (this.product.AtWishList) {
        this.ADD_WISH_LIST_ITEM(this.product.ProductID);
      } else {
        this.REMOVE_WISH_LIST_ITEM(this.product.ProductID);
      }
    },
  },
};
</script>
