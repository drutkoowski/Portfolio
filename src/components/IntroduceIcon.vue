<template>
  <div class="introduce-wrapper__icon">
    <img src="/images/icon.svg" class="introduce-wrapper__icon__centered" />

    <div class="introduce-wrapper__icon__container">
      <div class="item" style="--d: 0s">
        <img src="/images/javascript.svg" alt="Javascript" />
      </div>
      <div class="item" style="--d: -2s">
        <img src="/images/python.svg" alt="Python" />
      </div>
      <div class="item" style="--d: -4s">
        <img src="/images/django.svg" alt="Django" />
      </div>
      <div class="item" style="--d: -6s">
        <img src="/images/sass.svg" alt="Sass" />
      </div>
      <div class="item" style="--d: -8s">
        <img src="/images/vue.svg" alt="Vue" />
      </div>
      <div class="item" style="--d: -10s">
        <img src="/images/html5.svg" alt="Html" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroduceIcon",
};
</script>

<style lang="scss" scoped>
@keyframes spin {
  100% {
    transform: rotate(1turn) translate(100px) rotate(-1turn);
  }
}
.introduce-wrapper__icon {
  grid-column: 2/3;
  position: relative;
  @media screen and (max-width: 600px) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  &__centered {
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 40%;
    left: 40%;
    transform: scale(2);
    @media screen and (max-width: 1100px) {
      top: 30%;
      left: 30%;
      transform: scale(1.2);
    }
    @media screen and (max-width: 900px) {
      top: 30%;
      left: 30%;
      transform: scale(0.8);
    }
  }
  &__container {
    width: 200px;
    height: 200px;
    margin: 40px auto;
    display: grid;
    grid-template-columns: 30px;
    grid-template-rows: 30px;
    place-content: center;
    border-radius: 50%;
    transform: scale(2);
    @media screen and (max-width: 900px) {
      top: 30%;
      left: 30%;
      transform: scale(1.4);
    }
    @media screen and (max-width: 500px) {
      margin: 30px auto 0 auto;
      transform: scale(1);
    }
    .item {
      grid-area: 1/1;
      line-height: 30px;
      border-radius: 50%;
      animation: spin 12s var(--d, 0s) linear infinite; /* duration = 12s, numbor of item = 6 so a delay of 12/6 = 2s */
      transform: rotate(0) translate(100px) rotate(0);
      img {
        width: 3rem;
        height: 3rem;
        @media screen and (max-width: 1100px) {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
}
</style>
