<template>
  <div class="about-wrapper">
    <div class="wrapper">
      <div class="about d-flex">
        <h2>Where legal knowledge <br/><span>meets business strategy</span></h2>
        <p class="subtext">Collaborative solutions for <br/> <span>complex legal challenges.</span></p>
        <BaseButton @click="scrollToSection('scrollFirst')">Learn more</BaseButton>
      </div>
      <div class="what-we-are">
        <div class="what-we-are__head d-flex">
          <div class="svg-wrapper">
            <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.3818 9.03037C8.50727 8.81527 8.40104 8.53439 8.15678 8.48595C7.72519 8.40035 7.27894 8.35547 6.8222 8.35547C3.0544 8.35547 0 11.4099 0 15.1777C0 18.9455 3.0544 21.9999 6.8222 21.9999C7.27894 21.9999 7.72519 21.955 8.15679 21.8694C8.40104 21.821 8.50727 21.5401 8.3818 21.325C7.40752 19.6548 6.82218 17.513 6.82218 15.1777C6.82218 12.8423 7.40752 10.7005 8.3818 9.03037Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6182 12.9694C13.4927 13.1845 13.599 13.4654 13.8432 13.5138C14.2748 13.5994 14.7211 13.6443 15.1778 13.6443C18.9456 13.6443 22 10.5899 22 6.82208C22 3.05429 18.9456 -0.000118942 15.1778 -0.000118613C14.7211 -0.000118573 14.2748 0.0447642 13.8432 0.13036C13.599 0.178802 13.4927 0.459688 13.6182 0.67478C14.5925 2.34494 15.1778 4.48673 15.1778 6.82209C15.1778 9.15745 14.5925 11.2992 13.6182 12.9694Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.03031 13.616C8.81521 13.4905 8.53433 13.5968 8.4859 13.841C8.40033 14.2725 8.35547 14.7187 8.35547 15.1754C8.35547 18.9432 11.4099 21.9976 15.1777 21.9976C18.9455 21.9976 21.9999 18.9432 21.9999 15.1754C21.9999 14.7185 21.955 14.2722 21.8693 13.8405C21.8209 13.5963 21.54 13.49 21.3249 13.6155C19.6547 14.5899 17.5128 15.1754 15.1772 15.1754C12.842 15.1754 10.7004 14.5901 9.03031 13.616Z" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9697 8.38402C13.1848 8.50948 13.4657 8.40324 13.5141 8.15898C13.5997 7.72746 13.6445 7.28129 13.6445 6.82464C13.6445 3.05685 10.5901 0.00244181 6.82233 0.0024423C3.05453 0.00244279 0.000125332 3.05685 0.000125826 6.82465C0.000125886 7.28147 0.0450268 7.72781 0.130655 8.15948C0.179107 8.40374 0.459999 8.50996 0.675086 8.38447C2.3453 7.41006 4.48724 6.82463 6.82278 6.82463C9.15796 6.82463 11.2996 7.40988 12.9697 8.38402Z" fill="white"/>
            </svg>
          </div>
          <p>Who we are</p>
        </div>
        <div class="what-we-are__content d-flex sp-between wrap">
          <p>We are a team of experienced legal consultants dedicated to helping businesses succeed in today's fast-paced and ever-changing business environment.</p>
          <p>We understand that navigating legal challenges can be daunting and time-consuming, which is why we work closely with our clients to develop customized solutions that meet their specific needs and goals</p>
          <p>Whether you're just starting out and need help with business incorporation, or you're an established business looking to expand into new markets, we have the expertise and industry knowledge to help you achieve your objectives.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/Base/BaseButton.vue";
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
.about {
  text-align: center;
  flex-direction: column;
  &-wrapper {
    margin-top: 30px;
    background-image: url("@/assets/lines.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100% 100%;
    overflow: hidden;
    max-height: 870px;
    h2 {
      font-size: 60px;
      line-height: 84px;
      span {
        color: $secondary-color;
      }
    }
    & .subtext {
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
      margin: 16px 0 20px;
      span {
        color: $secondary-color;
      }
    }
  }
}
.what-we-are {
  padding: 60px 48px 150px;
  border-radius: 32px 32px 0px 0px;
  background: rgba(241, 237, 227, 0.80);
  backdrop-filter: blur(100px);
  color: #000;
  margin-top: 100px;
  &__head {
    gap: 14px;
    & p {
      font-size: 48px;
      font-weight: 600;
    }
    & .svg-wrapper {
      width: 36px;
      & path {
        fill: $secondary-color;
      }
    }
  }
  &__content {
    align-items: start;
    text-align: left;
    margin-top: 30px;
    p {
      font-size: 15px;
      font-weight: 500;
      line-height: 26px;
      width: calc(33% - 30px);
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .about-wrapper {
    background-size: 200% 100%;
    .wrapper {
      padding: 30px 30px 0 30px;
    }
    max-height: none;
  }
  .what-we-are {
    padding: 60px 48px 100px;
    &__head {
      & p {
        font-size: 43px;
      }
    }
    &__content {
      margin-top: 24px;
      p {
        width: calc(50% - 15px);
        &:last-child {
          margin-top: 16px;
          width: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .about {
    &-wrapper {
      max-height: none;
      background-size: 250% 100%;
      & .wrapper {
        padding: 30px 8px 0 8px;
      }
      h2 {
        font-style: normal;
        font-size: 46px;
        line-height: 60px;
      }
    }
    & .subtext {
      font-size: 18px;
      margin: 16px 0 32px;
    }
    button {
      width: 95%;
      max-width: 400px;
      margin: 0 20px;
      justify-content: center;
      padding: 15px;
    }
  }
  .what-we-are {
    padding: 40px 22px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__head {
      & p {
        font-size: 38px;
      }
    }
    &__content {
      margin-top: 16px;
      text-align: center;
      p {
        width: 100%;
        & + p {
          margin-top: 16px;
        }
      }
    }
  }
}
</style>