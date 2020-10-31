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
    <ProductFilter v-if="products" :products="products" />
    <Products v-if="products" :products="products" />
  </div>
</template>

<script>
import axios from 'axios';

import ProductKinds from '@/components/category/ProductKinds';
import ProductFilter from '@/components/category/ProductFilter';
import Products from '@/components/category/Products';

export default {
  name: 'Category',
  components: {
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
      title: null,
      productKinds: null,
      products: null,
    };
  },
  mounted() {
    this.setCategoryInfo();
    this.setProducts();
  },
  methods: {
    setCategoryInfo() {
      axios.get('https://api.m-lombard.kz/getFilters')
        .then((res) => {
          const targetCategory = res.data.ProductCategoriesFilter
            .find((category) => category.ID === this.id);

          this.title = targetCategory.Name;
          this.productKinds = targetCategory.ProductKinds;
        });
    },
    setProducts() {
      axios.post('https://api.m-lombard.kz/getProducts', {
        lowPrice: null,
        highPrice: null,
        page: 1,
        count: 20,
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
          this.products = res.data.Products;
        });
    },
  },
};
</script>
