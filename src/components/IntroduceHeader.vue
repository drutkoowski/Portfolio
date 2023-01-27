<template>
  <div class="introduce-wrapper">
    <div class="introduce-wrapper__text">
      <h1>Hi<span>,</span> I am Damian<span>.</span></h1>
      <p>Junior Web Developer powered by passion<span>.</span></p>
      <Button text="Find out more →" />
    </div>
    <div class="introduce-wrapper__icon">
      <img src="@/assets/images/programmer.svg" alt="" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "IntroduceHeader",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Button,
  },
};
</script>

<style lang="scss">
.introduce-wrapper {
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  grid-template-rows: 1fr;
  column-gap: 5rem;
  height: 70vh;
  align-items: center;
  justify-items: center;
  &__text {
    color: white;
    justify-self: end;
    h1 {
      font-size: 4rem;
    }
    span {
      color: var(--orange);
    }
    p {
      font-family: "Indie Flower", cursive;
      font-size: 2rem;
    }
  }
  &__icon {
    justify-self: start;
    img {
      width: 20rem;
      height: 20rem;
    }
  }
}
</style>
