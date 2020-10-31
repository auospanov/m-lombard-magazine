<template>
  <section class="category-subcategory-section">
    <div class="container">
      <div class="row">
        <div
          class="col-md-3 col-lg-3 col-sm-4 col-xs-4"
          v-for="productKind in productKinds"
          :key="productKind.ID"
        >
          <router-link :to="`/category/${categoryId}/${productKind.ID}`" class="category-subcategory-head-wrap">
            <img
              src="@/assets/images/ring-1.jpeg"
              :alt="productKind.Name"
              class="category-subcategory-img"
            />
            <h3 class="category-subcategory-name">{{ productKind.Name }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductKinds',
  props: {
    categoryId: {
      type: String,
      required: true,
    },
    productKinds: {
      type: Array,
      required: true,
    },
  },
};
</script>
