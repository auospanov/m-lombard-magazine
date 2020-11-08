<template>
  <div class="categoty-page">
    <section class="category-head-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="category-head-wrap">
              <h1 class="h1">{{ title }}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ProductKinds v-if="productKinds" :category-id="this.id" :product-kinds="productKinds" />
    <ProductFilter v-if="products.length" :products="products" />
    <Products v-if="products.length" :products="products" @toggleWishListItem="toggleWishListItem" />
    <infinite-loading @infinite="setProducts">
      <div slot="no-more"></div>
      <div slot="no-results">В данной категории нет товаров</div>
    </infinite-loading>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapActions } from 'vuex';
import InfiniteLoading from 'vue-infinite-loading';

import ProductKinds from '@/components/category/ProductKinds';
import ProductFilter from '@/components/category/ProductFilter';
import Products from '@/components/category/Products';

export default {
  name: 'Category',
  components: {
    InfiniteLoading,
    ProductKinds,
    ProductFilter,
    Products,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    productKindId: {
      type: String,
    },
  },
  data() {
    return {
      page: 1,
      title: null,
      productKinds: null,
      products: [],
    };
  },
  computed: mapState(['customerId']),
  mounted() {
    this.setCategoryInfo();
  },
  methods: {
    ...mapActions(['ADD_WISH_LIST_ITEM', 'REMOVE_WISH_LIST_ITEM']),
    setCategoryInfo() {
      axios.get('https://api.m-lombard.kz/getFilters')
        .then((res) => {
          const targetCategory = res.data.ProductCategoriesFilter
            .find((category) => category.ID === this.id);

          this.title = targetCategory.Name;
          this.productKinds = targetCategory.ProductKinds;
        });
    },
    setProducts($state) {
      axios.post('https://api.m-lombard.kz/getProducts', {
        CustomerIIN: '',
        CustomerID: this.customerId,
        lowPrice: 0,
        highPrice: 0,
        page: this.page,
        count: 12,
        sort: null,
        ProductCategoriesFilter: [this.id],
        ProductKindsFilter: this.productKindId ? [this.productKindId] : [],
        StonesFilter: [],
        GoldColorFilter: [],
        GoldContentFilter: [],
        RingSizeFilter: [],
        ChainSizeFilter: [],
      })
        .then((res) => {
          if (res.data.Products && res.data.Products.length !== 0) {
            this.page += 1;
            this.products.push(...res.data.Products);
            $state.loaded();
          } else {
            $state.complete();
          }
        });
    },
    toggleWishListItem(productId) {
      const targetProduct = this.products.find((product) => product.ProductID === productId);
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
