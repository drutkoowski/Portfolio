<template>
  <div class="slider-container__content__images__slider">
    <img
      v-if="slider !== 0"
      class="slider-container__content__images__slider__left-arrow"
      src="/images/left-arrow.svg"
      alt="Left arrow"
      @click.prevent="slideLeft"
    />

    <img
      class="slider-container__content__images__slider__image"
      :src="'/images/' + images[slider]"
      :alt="name"
    />
    <img
      v-if="slider !== images.length - 1"
      class="slider-container__content__images__slider__right-arrow"
      src="/images/right-arrow.svg"
      alt="Right arrow"
      @click.prevent="slideRight"
    />
    <p class="slider-container__content__images__slider__description">
      {{ name }} {{ $t("projects.photo") }} {{ slider + 1 }}
      {{ $t("projects.of") }}
      {{ images.length }}
    </p>
  </div>
  <div class="slider-container__content__images__links">
    <h3>{{ $t("projects.links") }}</h3>
    <ul>
      <li>
        <a target="_blank" :href="repoLink">{{ $t("projects.repo") }}</a>
      </li>
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
  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
  }
  ul {
    padding: 0 10px;
    @media screen and (max-width: 1200px) {
      padding: 0 0;
    }
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
  width: auto;
  height: 90%;
  display: flex;
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
    @media screen and (max-width: 1000px) {
      bottom: -15%;
    }
    @media screen and (max-width: 600px) {
      bottom: -35%;
    }
  }
  &__image {
    width: 99%;
    height: 100%;
    border: 2px solid var(--orange);
    @media screen and (max-width: 500px) {
      height: auto;
    }
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
    @media screen and (max-width: 600px) {
      height: 2rem;
      width: 2rem;
    }
    @media screen and (max-width: 400px) {
      height: 1.5rem;
      width: 1.5rem;
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
    @media screen and (max-width: 600px) {
      height: 2rem;
      width: 2rem;
    }
    @media screen and (max-width: 400px) {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>
