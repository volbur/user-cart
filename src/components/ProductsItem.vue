<template>
  <section class="products-item">
    <div class="products-item__data">
      <div class="products-item__img">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="products-item__content">
        <h3 class="products-item__title">{{ product.title }}</h3>
        <BaseBandge :no-margin-left="true" mode="highlight">{{
          product.price
        }}</BaseBandge>
        <p class="products-item__desc">{{ product.description }}</p>
      </div>
    </div>
    <div class="products-item__actions">
      <BaseButton class="products-item__btn">Add to Cart</BaseButton>
    </div>
  </section>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style scoped lang="scss">
.products-item {
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.products-item:not(.products-item:last-child) {
  margin-bottom: 30px;
}

.products-item__data {
  display: flex;
}

.products-item__img {
  margin-right: 30px;
  img {
    width: 10rem;
    height: 10rem;
  }
}

.products-item__title {
  margin: 0 0 1rem 0;
}

.products-item__actions {
  text-align: center;
}
</style>