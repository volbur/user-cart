<template>
  <section class="cart">
    <h2 class="cart-title">Your Cart</h2>
    <h3 class="cart-subtitle">
      Total Amount: <BaseBandge>${{ cart.total }}</BaseBandge>
    </h3>
  </section>
</template>

<script>
export default {
  inject: ['cart'],
};
</script>

<style scoped>
.cart {
  margin: 0 auto;
  max-width: 40rem;
}

.cart-title {
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
  text-align: center;
}

.cart-subtitle {
  text-align: center;
}
</style>