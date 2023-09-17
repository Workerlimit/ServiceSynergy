<template>
  <div class="wrapper" style="position: relative">
    <div class="image">
      <img src="@/assets/photo.png" alt="successful-photo" />
    </div>
    <div class="info" id="scrollAbout">
      <h1>What we do</h1>
      <p>Our focus is on providing exceptional value to our clients by <span>delivering high-quality legal services.</span> We believe in building strong, long-term relationships with our clientsbased on trust, integrity, and respect.</p>
      <p>With our help, you can <span>navigate legal complexities with confidence and achieve the success you deserve.</span></p>
    </div>
    <div class="d-flex wrap gap-40 align-stretch info-block">
      <UiBlockText
          id="scrollFirst"
          title="Legal Consultancy"
          img-name="b1"
          partialText="Our legal consultancy services are designed to help businesses navigate complex legal issues and make informed decisions. Our team of legal experts will work closely with you to understand your unique needs and provide tailored solutions that meet your specific requirements."
      >
        <p>Our legal consultancy services are designed to help businesses navigate complex legal issues and make informed decisions. Our team of legal experts will work closely with you to understand your unique needs and provide tailored solutions that meet your specific requirements.</p>
        <p>Legal consultancy services are designed to provide legal advice and assistance to businesses in a wide range of areas. This can include contract law, commercial law, intellectual property, employment law, and regulatory compliance.</p>
        <p>The goal of legal consultancy is to help businesses understand their legal obligations and reduce legal risks.</p>
      </UiBlockText>

      <UiBlockText
          id="scrollFirst"
          title="Business Incorporation"
          img-name="b2"
          partialText="Starting a new business can be an exciting but challenging experience. We offer business incorporation services that help streamline the process and ensure compliance with all legal requirements. From entity formation to regulatory compliance, we can help you get your business up and running in no time."
      >
        <p>Starting a new business can be an exciting but challenging experience. We offer business incorporation services that help streamline the process and ensure compliance with all legal requirements. From entity formation to regulatory compliance, we can help you get your business up and running in no time.</p>
        <p>Business incorporation is the process of legally forming a new businessentity.</p>
        <p>This can involve choosing the appropriate legal structure (such as a corporation, limited liability company, or partnership), registering the business with the appropriate government authorities, and obtaining any necessary licenses and permits.</p>
      </UiBlockText>

      <UiBlockText
          id="scrollSecond"
          title="Banks & Crypto Solutions"
          img-name="b3"
          partialText="Whether you need assistance with opening a bank account, setting up a merchant account, or accessing cryptocurrency exchanges, we can help. Our team of experts has a deep understanding of the regulatory landscape and can help you navigate complex financial transactions with confidence."
      >
        <p>Whether you need assistance with opening a bank account, setting up a merchant account, or accessing cryptocurrency exchanges, we can help. Our team of experts has a deep understanding of the regulatory landscape and can help you navigate complex financial transactions with confidence.</p>
        <p>Our team of experts has extensive experience in the banking and cryptocurrency industries, and can help you navigate the complexities of account opening with ease.</p>
        <p>Whether you're looking to open a bank account for your business, set up a merchant account, or gain access to cryptocurrency exchanges, we have the knowledge and expertise to help.</p>
      </UiBlockText>

      <UiBlockText
          id="scrollSecond"
          title="AML & Compliance"
          img-name="b4"
          partialText="With our help, you can rest assured that your business is compliant with AML and other regulatory requirements, and that you are well-equipped to manage any potential risks that may arise. Let us help you protect your business and achieve long-term success."
      >
        <p>With our help, you can rest assured that your business is compliant with AML and other regulatory requirements, and that you are well-equipped to manage any potential risks that may arise. Let us help you protect your business and achieve long-term success.</p>
        <p>We understand the importance of compliance with Anti-Money Laundering (AML) regulations and know that compliance is a top priority for businesses.</p>
        <p>Our team stays up-to-date with the latest regulatory developments and industry trends to provide you with the most relevant and effective solutions.</p>
      </UiBlockText>

      <UiBlockText
          id="scrollThird"
          title="HR & Office Rent"
          img-name="b5"
          partialText="Whether you're looking to rent a new office space, set up a satellite office, or expand your team in a new market, we can help."
          partialText2="Our research services provide you with the insights and information you need to make informed decisions about your office space and talent needs."
          block-width="100%"
          img-width="221"
          :custom-style="true"
      >
        <p class="custom-text">Whether you're looking to rent a new office space, set up a satellite office, or expand your team in a new market, we can help.</p>
        <p class="custom-text">Our research services provide you with the insights and information you need to make informed decisions about your office space and talent needs.</p>
        <p class="custom-text second">When it comes to expanding your business, one of the most critical decisions you'll make is where to locate your office and how to build your team. This is where our HR & Office Rent research services come in.</p>
        <p class="custom-text">Once we have a clear understanding of your needs, we conduct comprehensive research on the local real estate market and the availability of office spaces that meet your requirements.</p>
        <p class="custom-text">In addition to helping you find the right office space, we also conduct research on the local talent market to help you build the team you need to succeed.</p>
      </UiBlockText>
    </div>
  </div>
</template>

<script setup>
import UiBlockText from "@/components/UI/UiBlockText.vue";
</script>

<style scoped lang="scss">
.image {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translate(-50%, 0);
}
.info {
  margin: 255px 0 48px;
  text-align: center;
  h1 {
  }
  p {
    margin: 16px auto 0;
    max-width: 600px;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    span {
      color: $secondary-color;
    }
  }
}
.custom-text {
  width: calc(33% - 58px);
  &.second {
    width: calc(33% - 47px);
  }
}

@media screen and (max-width: 767px) {
  .image {
    max-width: 450px;
    width: 90%;
    height: 200px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 30px;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info {
    margin: 150px 0 30px;
    & p {
      font-size: 18px;
    }
    &-block {
      gap: 20px !important;
    }
  }
  .custom-text {
    width: 100% !important;
    & + .custom-text {
      margin-top: 16px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .image {
    width: 90%;
    left: 50%;
    top: -70px;
    transform: translate(-50%, 0);
    border-radius: 30px;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .custom-text {
    width: 100% !important;
    & + .custom-text {
      margin-top: 16px;
    }
  }
}
</style>