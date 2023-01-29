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
    this.path = "/src/assets/images/" + this.imgSrc;
  },
};
</script>

<style lang="scss" scoped>
div {
  display: table;
  font-size: 2em;
  img {
    display: table-cell;
    vertical-align: middle;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
  h3 {
    display: table-cell;
    vertical-align: middle;
  }
}
</style>
