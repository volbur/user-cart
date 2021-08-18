<template>
  <header>
    <router-link class="logo" :to="{ name: 'products' }"
      ><h1 class="h1">VueShop</h1></router-link
    >
    <div class="wrapper-center">
      <nav class="main-nav">
        <router-link class="main-naw__item" :to="{ name: 'products' }"
          >Products</router-link
        >
        <router-link class="main-naw__item" :to="{ name: 'cart' }"
          >Cart</router-link
        >
      </nav>
      <BaseBandge mode="elegant">{{ cart }}</BaseBandge>
    </div>
    <BaseButton @click="login" v-if="!isLoggedIn" mode="flat">Login</BaseButton>
    <BaseButton @click="logout" v-if="isLoggedIn" mode="flat"
      >Logout</BaseButton
    >
  </header>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters['cart/quantity'];
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 80px;
}

.logo {
  text-decoration: none;
}

.h1 {
  margin: 0;
  padding: 5px 0;
  border-bottom: 2px solid transparent;
  transition: border-color 0.1s ease-in;
  color: #000;
  &:hover {
    border-bottom: 2px solid #45006d;
    color: #45006d;
  }
}

.wrapper-center {
  display: flex;
  align-items: center;
}

.main-naw__item {
  border-bottom: 1px solid transparent;
  text-decoration: none;
  font-size: 20px;
  color: #000;
}

.main-naw__item:not(.main-naw__item:last-child) {
  margin-right: 20px;
}

.active {
  border-color: #45006d;
  color: #45006d;
}
</style>