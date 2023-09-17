<template>
  <div class="modal">
    <div class="modal__wrapper" @click="() => emit('updateVal')"></div>
    <div class="modal__body" :class="{'second': isSent}">
      <div style="margin-left: auto; width: 14px" @click="emit('updateVal')">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 13L13 1M1 1L13 13" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <template v-if="!isSent && !notValid">
        <h1>Ready to work with us?</h1>
        <div>
          <div class="d-flex gap-24 sp-between" style="margin: 28px 0 14px">
            <input class="input" type="text" placeholder="Name" v-model="data.name"/>
            <input class="input" type="email" placeholder="Email" v-model="data.email"/>
          </div>
          <textarea placeholder="Hello! Why did you just sent me that message?" v-model="data.text"></textarea>
          <label class="custom-checkbox d-flex gap-12" for="ch-1">
            <input type="checkbox" id="ch-1"/>
            <span class="checkmark"></span>
            <span>I have read and accept the <span>General Terms</span> and <span>Conditions</span> and the <span>Privacy Policy</span>.</span>
          </label>
          <label class="custom-checkbox d-flex gap-12" for="ch-2">
            <input type="checkbox" id="ch-2"/>
            <span class="checkmark"></span>
            I want to receive notifications about the latest products, events and cutting-edge ideas.
          </label>
        </div>
      </template>
      <BaseButton v-if="!isSent && !notValid" style="width: 100%; justify-content: center !important;" @click="send">Send message</BaseButton>

      <template v-if="isSent">
        <h1 class="second">{{ notValid ? "Oops!" : "Success!"}}</h1>
        <div class="d-flex column center">
          <img v-if="notValid" src="@/assets/icons/error.png" alt="error" />
          <img v-else src="@/assets/icons/success.png" alt="success" />
          <p v-if="notValid" style="text-align: center">Something went wrong.<br/> Please try again!</p>
          <p v-else style="text-align: center">Your application has been accepted. <br/>You will be contacted shortly for further details.</p>
        </div>
        <BaseButton style="width: 100%; justify-content: center !important;" @click="handleClick">Continue</BaseButton>
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import BaseButton from "@/components/Base/BaseButton.vue";
const emit = defineEmits(['updateVal']);

const data = ref({
  name: "",
  email: "",
  text: ""
})
const isSent = ref(false)
const notValid = ref(false)

const send = () => {
  if(data.value.name === "" || data.value.email === "") notValid.value = true;
  isSent.value = true;
}

const handleClick = () => {
  if(!notValid.value) emit("updateVal")
  notValid.value = false;
  isSent.value = false;
}
</script>

<style scoped lang="scss">
.modal {
  position: relative;
  transition: all .3s ease;
  &__wrapper {
    background: rgba(51, 56, 71, 0.83);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 10;
  }
  &__body {
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    background: #F1EDE3;
    position: fixed;
    z-index: 15;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
    color: #000;
    &.second {
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      & button {
        margin-top: 16px;
      }
    }
    & svg {
      transition: all .3s ease;
      &:hover {
        cursor: pointer;
        path {
          stroke: $secondary-color;
        }
      }
    }
    & h1 {
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 77px;
      &.second {
        font-size: 35px;
        font-weight: 500;
        line-height: normal;
      }
    }
  }
  .input, textarea {
    border-radius: 16px;
    border: 0.5px solid rgba(0, 0, 0, 0.16);
    background: rgba(225, 153, 55, 0.06);
    backdrop-filter: blur(13px);
    padding: 16px;
    width: 100%;
    transition: all .3s ease;
    &:hover {
      border: 0.5px solid $secondary-color;
    }
    &:focus, &:active {
      border: 1px solid $secondary-color;
      outline: none;
    }
  }
  .input {
    min-width: 320px;
    box-sizing: border-box;
  }
  textarea {
    min-height: 91px;
    margin-bottom: 15px;
  }
  input[type="checkbox"] {
    display: none;
  }
}
.custom-checkbox {
  font-size: 14px;
  line-height: 22px;
  &:hover {
    cursor: pointer;
  }
  & + .custom-checkbox {
    margin: 14px 0 25px;
  }
  & span > span {
    text-decoration: underline;
  }
  .checkmark {
    display: inline-block;
    width: 20px;
    min-width: 20px;
    height: 20px;
    min-height: 20px;
    border-radius: 6px;
    border: 1px solid $secondary-color;
    background: rgba(225, 153, 55, 0.06);
    backdrop-filter: blur(13px);
    cursor: pointer;
  }
  input[type="checkbox"]:checked + .checkmark {
    background-color: $secondary-color;
    background-size: 80% 80%;
    background-position: center center;
    background-image: url("@/assets/icons/check.svg");
  }
  input[type="checkbox"]:checked + .checkmark::before {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .modal {
    &__body {
      padding:24px;
      & h1 {
        font-size: 28px;
        font-weight: 500;
        line-height: normal;
      }
      & > div:nth-child(3) > div {
        flex-direction: column;
        gap: 12px;
      }
      button {
        padding: 8px;
        max-width: 400px;
      }
      &.second {
        width: auto;
        min-width: 350px;
        gap: 0;
      }
    }
  }
}
</style>