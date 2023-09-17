<template>
  <BaseHeader />
  <ScreenAbout />
  <ScreenInfo />
  <BaseFooter />
</template>

<script setup>
import BaseHeader from "@/components/Base/BaseHeader.vue";
import ScreenAbout from "@/components/Screen/ScreenAbout.vue";
import ScreenInfo from "@/components/Screen/ScreenInfo.vue";
import BaseFooter from "@/components/Base/BaseFooter.vue";
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}
body {
  background-color: $primary-color;
  color: $white;
}
@media screen and (max-width: 767px) {
  .wrapper {
    padding: 24px 20px;
  }
}
</style>
