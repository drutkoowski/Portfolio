import { defineStore } from "pinia";

export default defineStore("site", {
  state: () => ({
    slide: 0,
  }),
  actions: {
    increaseSlide() {
      console.log("+");
      this.slide += 1;
    },
    decreaseSlide() {
      this.slide -= 1;
    },
  },
});
