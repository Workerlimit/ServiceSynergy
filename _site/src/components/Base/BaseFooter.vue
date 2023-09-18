<template>
  <div class="footer">
    <div class="wrapper">
      <div class="img-wrapper">
        <div class="shadow" />
        <img src="@/assets/photo2.png" alt="photo" />
      </div>
      <div class="footer__content d-flex sp-between align-end">
        <div class="">
          <h1>Ready to work with us?</h1>
          <p>Drop us a line and we will contact you shortly!</p>
        </div>
        <BaseButton @click="is_contact_clicked = true">Contact Us</BaseButton>
      </div>
      <div class="footer__end" :style="`margin: ${blockHeight}px auto 0`">
        ©2023 servicesynergy.io
      </div>
    </div>
    <UiModal v-if="is_contact_clicked" @updateVal="() => is_contact_clicked = false"/>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import BaseButton from "@/components/Base/BaseButton.vue";
import UiModal from "@/components/UI/UiModal.vue";

const is_contact_clicked = ref(false);
const blockHeight = ref(0);

onMounted(() => {
  blockHeight.value = document.getElementsByClassName('footer__content')?.[0]?.clientHeight - 40;
})
const updateHeight = () => {
  blockHeight.value = document.getElementsByClassName('footer__content')[0].clientHeight - 40;
  console.log(blockHeight.value)
}
window.addEventListener('resize', updateHeight);
</script>

<style scoped lang="scss">
.footer {
  background-image: url("@/assets/lines2.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 120% 100%;
  position: relative;
  padding-top: 200px;
  button {
    min-width: 150px;
    line-height: normal;
  }
  & .img-wrapper {
    border-radius: 30px;
    position: relative;
    max-width: 952px;
    width: 90%;
    overflow: hidden;
    margin: 0 auto;
    & .shadow {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      top: 0;
      background: linear-gradient(97deg, rgba(225, 153, 55, 0.16) 14.1%, rgba(225, 153, 55, 0.09) 55.24%, rgba(225, 153, 55, 0.00) 110.78%);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    color: #000;
    border-radius: 32px 32px 0px 0px;
    background: rgba(241, 237, 227, 0.80);
    backdrop-filter: blur(100px);
    padding: 72px 55px;
    position: absolute;
    top: 450px;
    left: 50%;
    transform: translate(-50%);
    width: 94%;
    max-width: 1200px;
    z-index: 3;
    & h1 {
      font-size: 48px;
      font-weight: 600;
      line-height: normal;
    }
    & p {
      margin-top: 20px;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 40px;
    }
  }
  &__end {
    padding: 35px 0 10px;
    text-align: center;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
}

@media screen and (max-width: 1023px) {
  .footer {
    padding-top: 10px;
    background-size: 150% 100%;
    &__content {
      padding: 40px 10px;
      flex-direction: column;
      text-align: center;
      width: 92%;
      align-items: center !important;
      gap: 32px;
      top: 200px;
      & > div:first-child {
        padding: 0 50px;
      }
      & p {
        margin-top: 16px;
        font-size: 22px;
        line-height: normal;
      }
      h1 {
        font-size: 38px;
      }
      button {
        width: 100%;
        justify-content: center;
        padding: 8px !important;
        max-width: 600px;
      }
    }
    & .img-wrapper {
      height: 200px;
    }
    &__end {
      margin: 200px auto 0;
      padding: 25px 0 0;
    }
  }
}

@media screen and (min-width: 1100px){
  .footer__end {
    margin: 180px auto 0 !important;
  }
}
</style>