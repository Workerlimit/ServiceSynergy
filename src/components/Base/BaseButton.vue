<template>
  <button class="d-flex sp-between">
    <slot></slot>
    <img src="@/assets/icons/arrow-left.svg" alt="arrow icon">
  </button>
</template>

<script setup>
</script>

<style scoped lang="scss">
button {
  background: $secondary-color;
  padding: 10px 18px 10px 20px;
  gap: 10px;
  color: $white;
  border-radius: 12px;
  border: 1px solid $secondary-color;
  min-height: 34px;
  &:hover {
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.20);
    background: rgba(225, 153, 55, 0.70);
  }
}
@media screen and (max-width: 767px) {
  button {
    padding: 6px 14px 6px 10px;
    gap: 6px;
  }
}
</style>