<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      isLoggedIn: false,
      cart: {
        total: 10,
      },
    };
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      cart: this.cart,
      login: this.login,
      logout: this.logout,
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
      console.log('login-done');
    },
    logout() {
      this.isLoggedIn = false;
      console.log('logout-done');
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

img {
  display: inline-block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
</style>