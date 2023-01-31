<template>
  <li>
    <img :src="path" alt="Icon" />
    <span>{{ text }}</span>
  </li>
</template>

<script>
export default {
  name: "TechElement",
  props: ["imgSrc", "text"],
  created() {
    this.path = "images/" + this.imgSrc;
  },
};
</script>

<style lang="scss" scoped>
li {
  display: table;
  font-size: 2em;
  @media screen and (max-width: 1300px) {
    font-size: 1.25em;
  }
  @media screen and (max-width: 700px) {
    font-size: 1em;
    margin-top: 0.25rem;
    display: inline-table;
    margin-right: 1rem;
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
    }
    @media screen and (max-width: 700px) {
      height: 1.15rem;
      width: 1.15rem;
      margin-right: 0.3rem;
    }
  }
  span {
    display: table-cell;
    vertical-align: middle;
  }
}
</style>
