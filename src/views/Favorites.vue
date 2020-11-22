<template>
  <div class="favorites-page">
    <section class="fav-head-section">
      <div class="container">
        <div class="row">
          <div class="col-12 favorites-page__cabinet-wrapper">
            <p class="favorites-page__cabinet">
              Войдите в свой аккаунт, чтобы увидеть товары, добавленные в избранное на других устройствах,
              а так же сохранить существующие.
            </p>
            <button class="outline-button">Войти в аккаунт</button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="fav-head-wrap">
              <h1 class="h1">
                У вас
                {{ wishListCount }}
                {{ pluralize(wishListCount, ['товар', 'товара', 'товаров']) }}
                в избранном
              </h1>
              <p class="fav-head-p">
                Здесь хранятся все товары, которые вы отметили сердечком в
                каталоге или на странице товара
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="fav-body-section">
      <div class="container">
        <div class="row">
          <div
            v-for="wishListItem in localWishList"
            :key="wishListItem.ProductID"
            class="col-md-2 col-lg-2 col-sm-6 col-6"
          >
            <div class="fav-item-wrap" :class="{'anymore-chosen' : !wishListItem.AtWishList}">
              <span v-if="wishListItem.ProductSold" class="fav-item-sold-text">Продано</span>
              <!-- <div class="fav-item-sale-percent">-40%</div> -->
              <div class="fav-item-heart-wrap">
                <button class="fav-item-heart-btn-wrap" @click="toggleWishListItem(wishListItem.ProductID)">
                  <i
                    class="fa-heart far"
                    :class="{'fas' : wishListItem.AtWishList}"
                  >
                  </i>
                </button>
              </div>
              <router-link :to="`/product/${wishListItem.ProductID}`" class="fav-item-a-wrap">
                <div class="fav-item-goods-img-wrap">
                  <img
                    src="@/assets/images/ring-1.jpeg"
                    :alt="wishListItem.ProductName"
                    class="fav-item-goods-img"
                  />
                </div>
                <div class="fav-item-price-wrap">
                  <span class="fav-item-price-actual">от {{ prettyPrice(wishListItem.Price) }} тг</span>
                  <!-- <strike class="fav-item-price-old">17 610 тг</strike> -->
                </div>
                <h2 class="fav-item-h2">
                  {{ wishListItem.ProductName }}
                </h2>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { prettyPrice, pluralize } from '@shared/utils/text';

function enrichWithAtWishList(wishList) {
  return wishList.map((wishListItem) => ({
    ...wishListItem,
    AtWishList: true,
  }));
}

export default {
  name: 'Favorites',
  data() {
    return {
      localWishList: enrichWithAtWishList(this.$store.state.wishList || []),
    };
  },
  computed: {
    wishListCount() {
      return this.localWishList.filter((product) => product.AtWishList).length;
    },
  },
  mounted() {
    if (this.wishListCount === 0) {
      this.$router.replace('/favorites-empty');
    }
  },
  methods: {
    ...mapActions(['ADD_WISH_LIST_ITEM', 'REMOVE_WISH_LIST_ITEM']),
    prettyPrice,
    pluralize,
    toggleWishListItem(productId) {
      const targetProduct = this.localWishList.find((product) => product.ProductID === productId);
      targetProduct.AtWishList = !targetProduct.AtWishList;

      if (targetProduct.AtWishList) {
        this.ADD_WISH_LIST_ITEM(productId);
      } else {
        this.REMOVE_WISH_LIST_ITEM(productId);
      }
    },
  },
};
</script>
