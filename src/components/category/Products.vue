<template>
  <section class="fav-body-section">
    <div class="container">
      <div class="row">
        <div
          class="col-md-2 col-lg-2 col-sm-6 col-6"
          v-for="product in products"
          :key="product.ProductID"
        >
          <div class="fav-item-wrap">
            <div class="fav-item-sale-percent">-40%</div>
            <div class="fav-item-heart-wrap">
              <div class="fav-item-heart-a-wrap">
                <i class="far fa-heart" onclick="myFunction(this)"></i>
              </div>
            </div>
            <router-link :to="`/product/${product.ProductID}`" class="fav-item-a-wrap">
              <div class="fav-item-goods-img-wrap">
                <img
                  src="@/assets/images/ring-1.jpeg"
                  :alt="product.Product"
                  class="fav-item-goods-img"
                />
              </div>
              <div class="fav-item-price-wrap">
                <span class="fav-item-price-actual">от {{ prettyPrice(product.Price) }} тг</span>
                <!-- <strike class="fav-item-price-old">17 610 тг</strike> -->
              </div>
              <h2 class="fav-item-h2">{{ product.Product }}</h2>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { prettyPrice } from '@shared/utils/text';

export default {
  name: 'Products',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    prettyPrice,
  },
};
</script>
