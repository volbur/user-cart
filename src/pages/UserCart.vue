<template>
  <section class="cart">
    <h2 class="cart-title">Your Cart</h2>
    <h3 class="cart-subtitle">
      Total Amount: <BaseBandge mode="elegant">${{ cartTotal }}</BaseBandge>
    </h3>
    <ul>
      <h2>cartItems: {{ cartItems }}</h2>
      <CartItem
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :cart-items="cartItems"
      />
    </ul>
  </section>
</template>

<script>
import CartItem from '../components/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  computed: {
    cartTotal() {
      return this.$store.getters['cart/totalSum'];
    },
    cartItems() {
      return this.$store.getters['cart/products'];
    },
  },
};
</script>

<style scoped>
.cart {
  margin: 0 auto;
  max-width: 40rem;
  margin-bottom: 2rem;
}

.cart-title {
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
  text-align: center;
}

.cart-subtitle {
  text-align: center;
}

ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
</style>