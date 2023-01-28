<template>
  <div class="slider-container">
    <div class="slider-container__arrow">
      <img src="@/assets/images/left-arrow.svg" alt="Left arrow" />
    </div>
    <div class="slider-container__content">
      <About />
    </div>
    <div class="slider-container__arrow">
      <img
        src="@/assets/images/right-arrow.svg"
        alt="Right arrow"
        style="margin-left: auto"
      />
    </div>
  </div>
</template>

<script>
import About from "@/components/About.vue";
export default {
  name: "InfoSlider",
  components: {
    About,
  },
};
</script>

<style lang="scss" scoped>
.slider-container {
  height: 80vh;
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  &__content {
    color: white;
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    &__description {
      display: flex;
      flex-direction: column;
    }
    &__images {
      height: 100%;
      width: 100%;
      background-color: antiquewhite;
    }
  }
  &__arrow {
    display: flex;
    align-items: center;
    img {
      height: 3rem;
      width: 3rem;
      cursor: pointer;
      transition: all 0.3s ease-out;
      filter: invert(49%) sepia(32%) saturate(3567%) hue-rotate(2deg) brightness(105%)
        contrast(103%);
      &:hover {
        transform: scale(1.15);
      }
    }
  }
}
</style>
