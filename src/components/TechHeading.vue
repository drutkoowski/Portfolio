<template>
  <div>
    <img :src="path" alt="Icon" />
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  name: "TechHeading",
  props: ["imgSrc", "text"],
  created() {
    this.path = "images/" + this.imgSrc;
  },
};
</script>

<style lang="scss" scoped>
div {
  display: table;
  font-size: 2em;
  @media screen and (max-width: 1300px) {
    font-size: 1.5em;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.25em;
  }
  img {
    display: table-cell;
    vertical-align: middle;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
    @media screen and (max-width: 1300px) {
      height: 1.5rem;
      width: 1.5rem;
      margin-right: 1rem;
    }
    @media screen and (max-width: 600px) {
      height: 1.25rem;
      width: 1.25rem;
      margin-right: 1rem;
    }
  }
  h3 {
    display: table-cell;
    vertical-align: middle;
  }
}
</style>
