<template>
  <h2>cartItems: {{ cartItems }}</h2>
  <li class="cart-item">
    <div class="cart-item__img">
      <img :src="cartItems.image" alt="" />
    </div>
    <h3>{{ cartItems.title }}</h3>
    <div class="cart-item__data">
      <div>
        Price per item: <strong>${{ cartItems.price }}</strong>
      </div>
      <div>Quantily: <strong>3</strong></div>
    </div>
    <div class="cart-item__total">Total: $???</div>
    <div class="cart-item__btn">
      <BaseButton>Remove</BaseButton>
    </div>
  </li>
</template>

<script>
export default {
  props: ['cartItems'],
};
</script>

<style scoped lang="scss">
.cart-item {
  margin: 0 auto 2rem;
  padding: 1rem;
  max-width: 25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  &:last-child {
    margin-bottom: 0;
  }
}
.cart-item__img {
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}

h3 {
  text-align: center;
}

.cart-item__data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #000;
}

.cart-item__total {
  margin: 1rem 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
  text-align: center;
}

.cart-item__btn {
  text-align: center;
}
</style>