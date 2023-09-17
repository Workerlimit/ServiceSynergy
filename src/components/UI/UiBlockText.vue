<template>
  <div class="text-block d-flex" :style="`width: ${blockWidth}`" :class="{'custom': customStyle}">
    <div class="d-flex column gap-16 align-start">
      <h1>{{ title }}</h1>
      <div :style="`min-width: ${imgWidth}px`" class="mobile-icon">
        <img :src="require(`@/assets/icons/${imgName}.png`)" alt="icon" style="width: 100%"/>
      </div>
      <div v-if="!isMoreClicked && !customStyle">
        <p> {{ partialText }} </p>
      </div>
      <div v-if="!isMoreClicked && customStyle" class="d-flex align-start gap-60 second-block">
        <p class="second-text">{{ partialText }}</p>
        <p class="second-text">
          {{ partialText2 }} <br/>
          <button v-if="!isMoreClicked && customStyle" @click="isMoreClicked = true" style="margin-top: 16px; cursor: pointer">learn more</button>
        </p>
      </div>
      <button v-if="!isMoreClicked && !customStyle" @click="isMoreClicked = true" style="cursor: pointer">learn more</button>
      <div v-if="isMoreClicked" class="text-block__slot" :class="{'custom': customStyle}">
        <slot></slot>
        <div class="second-img" :style="`min-width: ${imgWidth}px`" v-if="customStyle && isMoreClicked" style="margin: 0 50px 0 auto">
          <img :src="require(`@/assets/icons/${imgName}.png`)" alt="icon" style="width: 100%"/>
        </div>
      </div>
    </div>
    <div class="desktop-icon" :style="`min-width: ${imgWidth}px`" v-if="!(customStyle && isMoreClicked)">
        <img :src="require(`@/assets/icons/${imgName}.png`)" alt="icon" style="width: 100%"/>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  partialText: {
    type: String,
    default: ""
  },
  partialText2: {
    type: String,
    default: ""
  },
  imgWidth: {
    type: Number,
    default: 122
  },
  blockWidth: {
    type: String,
    default: 'calc(50% - 20px)'
  },
  imgName: {
    type: String,
    default: ""
  },
  customStyle: {
    type: Boolean,
    default: false
  }
})

const isMoreClicked = ref(false)
console.log(props.partialText)
</script>

<style scoped lang="scss">
.text-block {
  padding: 24px 12px 60px 50px;
  color: #000;
  border-radius: 24px;
  background: #F1EDE3;
  //background: rgba(241, 237, 227, 0.80);
  backdrop-filter: blur(100px);
  gap: 11px;
  align-items: start;
  flex: 1 1 auto;
  & .mobile-icon {
    display: none;
  }
  &.custom {
    padding: 24px 12px 10px 50px;
  }
  h1 {
    margin-top: 36px;
    font-size: 32px;
    font-weight: 600;
    line-height: normal;
  }
  div {
    line-height: 26px;
  }
  button {
    border: none;
    outline: none;
    font-weight: 700;
    text-decoration-line: underline;
    text-transform: lowercase;
    color: $secondary-color;
  }
  &__slot {
    display: flex;
    flex-direction: column;
    gap: 16px;
    &.custom {
      flex-wrap: wrap;
      flex-direction: row;
      row-gap: 0;
      column-gap: 60px;
    }
  }
  .second-text {
    width: 35%;
  }
}

@media screen and (max-width: 1023px) {
  .text-block {
    width: 100% !important;
    text-align: center;
    padding: 30px 20px !important;
    &.custom {
      & .mobile-icon {
        min-width: 122px !important;
        width: 122px;
      }
    }
    & > div:first-child {
      align-items: center;
      gap: 10px;
    }
    & .desktop-icon {
      display: none;
    }
    & .mobile-icon {
      display: block;
    }
    .second-block {
      flex-wrap: wrap;
      gap: 16px;
    }
    .second-text {
      width: 100%;
    }
    .second-img {
      display: none;
    }
  }
}

@media screen and (max-width: 767px) {
  .text-block {
    h1 {
      margin-top: 0;
      font-size: 28px;
    }
  }
}
</style>