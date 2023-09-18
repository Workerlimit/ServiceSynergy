<template>
  <div class="wrapper">
    <header class="d-flex sp-between">
      <div class="logo d-flex">
        <img src="@/assets/logo.svg" alt="logo"/>
        <p>service <span>synergy</span></p>
      </div>
      <div class="nav d-flex sp-between gap-35">
        <div class="desktop-nav d-flex sp-between gap-35">
          <p @click="scrollToSection('scrollAbout')">About</p>
          <p
              class="dropped d-flex sp-between" style="gap: 5px"
              @click="is_service_clicked = !is_service_clicked"
              :class="{'rotate': is_service_clicked}"
          >
            Services
            <svg width="7" height="5" viewBox="0 0 7 5" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.93301 4.75C3.74056 5.08333 3.25944 5.08333 3.06699 4.75L0.901924 1C0.709474 0.666666 0.950037 0.25 1.33494 0.25L5.66506 0.25C6.04996 0.25 6.29053 0.666667 6.09808 1L3.93301 4.75Z" fill="white"/>
            </svg>
          </p>
          <div
              class="add"
              :class="{'show': is_service_clicked}"
              @mouseleave="is_service_clicked = false"
          >
            <p @click="scrollToSection('scrollFirst')">Legal Consultancy</p>
            <p @click="scrollToSection('scrollFirst')">Business Incorporation</p>
            <p @click="scrollToSection('scrollSecond')">Banks & Crypto Solutions</p>
            <p @click="scrollToSection('scrollSecond')">AML & Compliance</p>
            <p @click="scrollToSection('scrollThird')">HR & Office Rent</p>
          </div>
        </div>
        <BaseButton @click="is_contact_clicked = true">Contact Us</BaseButton>
        <MobileMenu />
      </div>
    </header>
  </div>
  <UiModal v-if="is_contact_clicked" @updateVal="() => is_contact_clicked = false"/>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import MobileMenu from "@/components/MobileMenu.vue";
import UiModal from "@/components/UI/UiModal.vue";

const is_service_clicked = ref(false);
const is_contact_clicked = ref(false);

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
.logo {
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  gap: 8px;
  & span {
    color: $secondary-color;
  }
  &:hover {
    cursor: pointer;
  }
}
.desktop-nav {
  position: relative;
  p {
    transition: all .3s ease;
    &:hover {
      cursor: pointer;
      color: $secondary-color;
      svg path {
        fill: $secondary-color;
      }
    }
  }
  svg path {
    transition: all .2s ease;
  }
  .dropped {
    svg {
      transition: transform .2s ease;
    }
    &.rotate {
      svg {
        transform: rotate(180deg);
      }
    }
  }
}
.add {
  display: none;
  color: $secondary-color;
  &.show {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 35px;
    left: 75px;
    width: 220px;
    background: #f1ede3;
    border-radius: 12px;
    overflow: hidden;
    padding: 8px 0;
    font-size: 13px;
    font-weight: 600;
    & p {
      padding: 8px 15px;
      &:hover {
        background: #e98c00;
        color: $white;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .logo {
    font-size: 12px;
  }
  .nav {
    gap: 12px !important;
  }
  .desktop-nav {
    display: none;
  }
}

</style>