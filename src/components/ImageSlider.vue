<template>
  <div class="slider-container__content__images__slider">
    <img
      v-if="slider !== 0"
      class="slider-container__content__images__slider__left-arrow"
      src="@/assets/images/left-arrow.svg"
      alt="Left arrow"
      @click.prevent="slideLeft"
    />

    <img
      class="slider-container__content__images__slider__image"
      :src="images[slider]"
      alt="Image"
    />
    <img
      v-if="slider !== images.length - 1"
      class="slider-container__content__images__slider__right-arrow"
      src="@/assets/images/right-arrow.svg"
      alt="Right arrow"
      @click.prevent="slideRight"
    />
    <p class="slider-container__content__images__slider__description">
      {{ name }} Photo {{ slider + 1 }} of {{ images.length }}
    </p>
  </div>
  <div class="slider-container__content__images__links">
    <h3>Links</h3>
    <ul>
      <li><a target="_blank" :href="repoLink">Repository</a></li>
      <li><a target="_blank" :href="demoLink">Demo</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  props: ["name", "images", "repoLink", "demoLink"],
  data() {
    return {
      slider: 0,
    };
  },
  methods: {
    slideLeft() {
      this.slider -= 1;
    },
    slideRight() {
      this.slider += 1;
    },
  },
  watch: {
    images() {
      this.slider = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-container__content__images__links {
  h3 {
    font-size: 2em;
    margin: 0 0;
    color: var(--orange);
  }
  ul {
    padding: 0 10px;
    li {
      cursor: pointer;
      transition: all 0.3s ease-in;

      &:hover {
        color: var(--orange);
      }
    }
  }
}

.slider-container__content__images__slider {
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  align-self: center;
  flex-wrap: wrap;
  position: relative;

  &__description {
    position: absolute;
    bottom: -10%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  &__image {
    width: 100%;
    height: 100%;
    border: 2px solid var(--orange);
  }
  &__left-arrow {
    position: absolute;
    top: 50%;
    left: 0%;
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
  &__right-arrow {
    position: absolute;
    top: 50%;
    right: 0%;
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
</style>
