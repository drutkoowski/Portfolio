<template>
  <div class="slider-container">
    <div class="slider-container__arrow">
      <img
        src="@/assets/images/left-arrow.svg"
        alt="Left arrow"
        @click.prevent="decrease"
      />
    </div>
    <div class="slider-container__content">
      <About v-if="slide === 1" />
      <Technologies v-if="slide === 2" />
    </div>
    <div class="slider-container__arrow">
      <img
        v-if="slide < 4"
        src="@/assets/images/right-arrow.svg"
        alt="Right arrow"
        style="margin-left: auto"
        @click.prevent="increase"
      />
    </div>
  </div>
</template>

<script>
import About from "@/components/About.vue";
import Technologies from "@/components/Technologies.vue";
import useSiteStore from "@/stores/site";
import { mapState } from "pinia";
export default {
  name: "InfoSlider",
  components: {
    About,
    Technologies,
  },
  computed: {
    ...mapState(useSiteStore, ["slide"]),
  },
  methods: {
    decrease() {
      const store = useSiteStore();
      store.decreaseSlide();
    },
    increase() {
      const store = useSiteStore();
      store.increaseSlide();
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-container {
  height: 80vh;
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  margin-top: 5rem;
  &__content {
    color: white;
    display: grid;
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
