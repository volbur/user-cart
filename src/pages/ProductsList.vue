<template>
  <section class="products-list">
    <ul>
      <ProductsItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
  </section>
</template>

<script>
import ProductsItem from '../components/ProductsItem.vue';

export default {
  components: {
    ProductsItem,
  },
  inject: ['products'],
};
</script>

<style scoped lang="scss">
.products-list {
  padding: 50px 0;
}

ul {
  margin: 0 auto;
  max-width: 40rem;
}
</style>