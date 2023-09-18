<template>
  <div
      class="mobile-menu d-flex gap-4"
      :class="{'active': is_menu_active}"
      @click="() => is_menu_active = !is_menu_active"
  >
    <div class="circle" />
    <div class="circle" />
    <div class="circle" />
    <div class="circle" />
  </div>
  <div
      class="dropdown-wrapper"
      :class="{'open': is_menu_active}"
  >
    <div class="text"><p @click="is_menu_active = false; scrollToSection('scrollAbout')">About</p></div>
    <div class="text" @mouseenter="is_list_hidden = false" @mouseleave="is_list_hidden = true">
      <p>Services</p>
      <div class="additional" :class="{'show': !is_list_hidden}">
        <p @click="is_menu_active = false; scrollToSection('scrollFirst')">Legal Consultancy</p>
        <p @click="is_menu_active = false; scrollToSection('scrollFirst')">Business Incorporation</p>
        <p @click="is_menu_active = false; scrollToSection('scrollSecond')">Banks & Crypto Solutions</p>
        <p @click="is_menu_active = false; scrollToSection('scrollSecond')">AML & Compliance</p>
        <p @click="is_menu_active = false; scrollToSection('scrollThird')">HR & Office Rent</p>
      </div>
    </div>
    <div class="bottom">©2023 servicesynergy.io</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const is_menu_active = ref(false);
const is_list_hidden = ref(true);
const scrollToSection = (name) => {
  const targetElement = document.getElementById(name);

  if (targetElement) {
    const targetPosition = targetElement.offsetTop;

    window.scrollTo({
      top: targetPosition + 500,
      behavior: "smooth",
    });
  }
}
</script>

<style scoped lang="scss">
.mobile-menu {
  background: $secondary-color;
  padding: 10px;
  width: 34px;
  min-width: 34px;
  height: 34px;
  min-height: 34px;
  flex-wrap: wrap;
  border-radius: 12px;
  transition: all .3s ease;
  border: 1px solid $secondary-color;
  &.active {
    gap: 0;
    padding: 12px;
  }
  &:hover {
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.20);
    background: rgba(225, 153, 55, 0.70);
  }
}
.dropdown-wrapper {
  transition: all .3s ease;
  position: fixed;
  background: $primary-color;
  width: 100%;
  height: 100vh;
  left: 120%;
  top: 65px;
  z-index: 20;
  background-image: url("@/assets/lines.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-position-y: 230px;
  background-size: 300% 100%;
  padding: 70px 20px;
  display: flex;
  flex-direction: column;
  &.open {
    left: 0;
  }
  & .text {
    font-size: 28px;
    font-weight: 500;
    transition: all .2s ease;
    & > p:hover {
      color: $secondary-color;
      cursor: pointer;
    }
    & + .text {
      margin-top: 30px;
    }
  }
  & .bottom {
    margin-top: auto;
  }
}
.additional {
  display: none;
  transition: all .3s ease;
  font-size: 22px;
  margin: 20px;
  &.show {
    display: block;
  }
  & p:hover {
    color: $secondary-color;
    cursor: pointer;
  }
  & p + p {
    margin-top: 28px;
  }
}
.circle {
  background: $white;
  height: 4px;
  width: 4px;
  border-radius: 100%;
}

@media screen and (min-width: 767px) {
  .mobile-menu {
    display: none;
  }
}
</style>