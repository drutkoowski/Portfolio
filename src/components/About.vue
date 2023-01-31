<template>
  <div class="slider-container__content__description" ref="desc">
    <h1>{{ $t("about.heading") }}</h1>
    <div>
      <p>
        {{ $t("about.iam") }} {{ yearsOld }} {{ $t("about.baseInfo") }} <br />
        {{ $t("about.goal") }}
        <br />
        <br />
        {{ $t("about.desc") }}
        <br />
        {{ $t("about.character") }}
        <br />
        <br />
        {{ $t("about.techstack") }} <br />
        {{ $t("about.languages") }}
      </p>
    </div>
  </div>
  <div class="slider-container__content__images" ref="images">
    <img src="/images/my_photo.png" alt="My Photo" />
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    this.yearsOld = new Date().getFullYear() - 2000;
  },
  mounted() {
    this.$refs.desc.classList.add("slideLeft");
    this.$refs.images.classList.add("slideLeft");
  },
};
</script>

<style lang="scss" scoped>
.slider-container__content__description {
  height: 70vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
  @media screen and (max-width: 600px) {
    grid-row: 2/3;
  }
  h1 {
    font-size: 3.5em;
    color: var(--orange);
    margin-top: 0;
    @media screen and (max-width: 600px) {
      font-size: 2.5em;
    }
  }
  div {
    font-size: 2em;
    @media screen and (max-width: 1000px) {
      font-size: 1.5em;
    }
    @media screen and (max-width: 1000px) {
      font-size: 1.1em;
    }
    @media screen and (max-width: 600px) {
      font-size: 0.85em;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.7em;
    }
  }
}
.slider-container__content__images {
  @media screen and (max-width: 1000px) {
    display: flex;
  }
  @media screen and (max-width: 600px) {
    grid-row: 1/2;
  }
  img {
    height: 70vh;
    background-size: cover;
    background-position: center;
    border: 2px solid var(--orange);
    @media screen and (max-width: 1300px) {
      width: 30rem;
      height: auto;
    }
    @media screen and (max-width: 1000px) {
      width: 15rem;
      height: auto;
      display: block;
      margin: auto auto;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      width: 100%;
      max-width: 15rem;
    }
  }
}
</style>
