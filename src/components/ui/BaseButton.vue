<template>
  <router-link :class="mode" v-if="link" :to="to">
    <slot></slot>
  </router-link>
  <button :class="mode" v-else>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    mode: {
      type: String,
      required: false,
      default: null,
    },
    to: {
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped lang="scss">
button,
a {
  display: inline-block;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: rgb(5, 5, 88);
  color: #fff;
}

button.flat,
a.flat {
  background-color: transparent;
  border: 1px solid rgb(5, 5, 88);
  color: #000;
  &:hover {
    background-color: #f0d5ff;
  }
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>