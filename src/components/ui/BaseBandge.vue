<template>
  <span class="badge" :class="['badge--' + mode, { nml: noMarginLeft }]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
    },
    noMarginLeft: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.badge {
  display: inline-block;
  padding: 0.15rem 1.25rem;
  background-color: #ccc;
  color: #292929;
  margin: 0 0.75rem;
  border-radius: 30px;
}

.badge--highlight {
  background-color: #f0b800;
  color: black;
}

.badge--elegant {
  background-color: #45006d;
  color: #fff;
}

.nml {
  margin-left: 0;
}
</style>