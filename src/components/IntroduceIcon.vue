<template>
  <div class="introduce-wrapper__icon">
    <img src="@/assets/images/icon.svg" class="introduce-wrapper__icon__centered" />

    <div class="introduce-wrapper__icon__container">
      <div class="item" style="--d: 0s">
        <img src="@/assets/images/javascript.svg" alt="Javascript" />
      </div>
      <div class="item" style="--d: -2s">
        <img src="@/assets/images/python.svg" alt="Python" />
      </div>
      <div class="item" style="--d: -4s">
        <img src="@/assets/images/django.svg" alt="Django" />
      </div>
      <div class="item" style="--d: -6s">
        <img src="@/assets/images/Sass.svg" alt="Sass" />
      </div>
      <div class="item" style="--d: -8s">
        <img src="@/assets/images/vuejs.svg" alt="Vue" />
      </div>
      <div class="item" style="--d: -10s">
        <img src="@/assets/images/html5.svg" alt="Html" />
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
  &__centered {
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 40%;
    left: 40%;
    transform: scale(2);
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
    .item {
      grid-area: 1/1;
      line-height: 30px;
      border-radius: 50%;
      animation: spin 12s var(--d, 0s) linear infinite; /* duration = 12s, numbor of item = 6 so a delay of 12/6 = 2s */
      transform: rotate(0) translate(100px) rotate(0);
      img {
        width: 3rem;
        height: 3rem;
      }
    }
  }
}
</style>
