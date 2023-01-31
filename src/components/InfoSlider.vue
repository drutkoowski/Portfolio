<template>
  <div class="slider-container">
    <div class="slider-container__arrow">
      <img src="/images/left-arrow.svg" alt="Left arrow" @click.prevent="decrease" />
    </div>
    <div class="slider-container__content">
      <About v-if="slide === 1" />
      <Technologies v-if="slide === 2" />
      <Projects v-if="slide === 3" />
    </div>
    <div class="slider-container__arrow">
      <img
        v-if="slide < 3"
        src="/images/right-arrow.svg"
        alt="Right arrow"
        style="margin-left: auto"
        @click.prevent="increase"
      />
    </div>
  </div>
</template>

<script>
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";
import Technologies from "@/components/Technologies.vue";
import useSiteStore from "@/stores/site";
import { mapState } from "pinia";

export default {
  name: "InfoSlider",
  components: {
    About,
    Technologies,
    Projects,
  },
  computed: {
    ...mapState(useSiteStore, ["slide"]),
  },
  methods: {
    decrease() {
      const store = useSiteStore();
      if (store.slide >= 1) {
        store.decreaseSlide();
      }
    },
    increase() {
      const store = useSiteStore();
      if (store.slide <= 3) {
        store.increaseSlide();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-container {
  min-height: 80vh;
  display: grid;
  grid-template-columns: 0.1fr 1fr 0.1fr;
  margin-top: 5rem;
  margin-bottom: 1rem;
  &__content {
    color: white;
    display: grid;
    grid-gap: 3rem;
    height: 80vh;
    grid-template-columns: 1fr 1fr;
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      /* WebKit */
      width: 0;
      height: 0;
    }
    @media screen and (max-width: 600px) {
      grid-template-columns: auto;
      grid-template-rows: auto;
    }
    &__description {
      display: flex;
      flex-direction: column;
      height: 80vh;
      overflow-y: scroll;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        /* WebKit */
        width: 0;
        height: 0;
      }
    }
    &__images {
      min-height: 80vh;
      height: 100%;
      width: 100%;
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
      @media screen and (max-width: 750px) {
        height: 2rem;
        width: 2rem;
      }
    }
  }
}
</style>
