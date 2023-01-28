<template>
  <main class="container">
    <Navbar />
    <IntroduceHeader v-if="slide === 0" />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import IntroduceHeader from "@/components/IntroduceHeader.vue";
import useSiteStore from "@/stores/site";
import { mapState } from "pinia";

export default {
  name: "HomeView",
  components: {
    Navbar,
    IntroduceHeader,
  },
  computed: {
    ...mapState(useSiteStore, ["slide"]),
  },
};
</script>

<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      rgba(45, 46, 48, 0.45),
      rgba(32, 30, 32, 0.65)
    ),
    url("@/assets/images/background-image.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
