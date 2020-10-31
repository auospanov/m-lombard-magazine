<template>
  <section class="fav-body-section">
    <div class="container">
      <div class="row">
        <div
          class="col-md-2 col-lg-2 col-sm-6 col-xs-6"
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
            <a href="product-2" class="fav-item-a-wrap">
              <div class="fav-item-goods-img-wrap">
                <img
                  src="@/assets/images/accessories-4.jpeg"
                  alt="Цепочка, плетение Бисмарк, из серебра"
                  class="fav-item-goods-img"
                />
              </div>
              <div class="fav-item-price-wrap">
                <span class="fav-item-price-actual">от 11 805 тг</span>
                <strike class="fav-item-price-old">17 610 тг</strike>
              </div>
              <h2 class="fav-item-h2">{{ product.Product }}</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Products',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
