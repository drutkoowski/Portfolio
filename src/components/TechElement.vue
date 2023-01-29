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
  img {
    display: table-cell;
    vertical-align: middle;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
  span {
    display: table-cell;
    vertical-align: middle;
  }
}
</style>
