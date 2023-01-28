<template>
  <div class="slider-container__content__description">
    <h1>About me</h1>
    <div>
      <p>
        I am {{ yearsOld }} year old programmer from Jaroslaw, Poland. <br />
        My goal is to create high-quality web applications, which, above all, would be
        useful for potential users. <br />
        <br />
        First of all, I always put as much of myself as possible into all my projects,
        trying to show my dedication to what I do by doing so. <br />
        I am characterized primarily by commitment, creativity and willingness to learn.
        <br />
        <br />
        My tech stack consists mostly of Python, Javascript and CSS - more specifically
        their frameworks. <br />I speak two languages - English (B2) and Polish (Native).
      </p>
    </div>
  </div>
  <div class="slider-container__content__images">
    <img src="@/assets/images/my_photo.png" alt="My Photo" />
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    this.yearsOld = new Date().getFullYear() - 2000;
  },
};
</script>

<style lang="scss" scoped>
.slider-container__content__description {
  h1 {
    font-size: 3.5em;
    color: var(--orange);
  }
  div {
    font-size: 2em;
  }
}
</style>
