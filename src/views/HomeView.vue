<template>
  <main class="container">
    <Navbar />
    <IntroduceHeader />
  </main>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import IntroduceHeader from "@/components/IntroduceHeader.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    IntroduceHeader,
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
