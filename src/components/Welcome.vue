<template>
  <div class="introduce-wrapper" ref="component">
    <div class="introduce-wrapper__text">
      <h1>
        {{ $t("welcome.hi") }}<span>,</span> {{ $t("welcome.introduce") }}<span>.</span>
      </h1>
      <p>{{ $t("welcome.desc") }}<span>.</span></p>
      <Button :text="$t('welcome.findOut')" @click.prevent="findOut" />
    </div>
    <IntroduceIcon />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import IntroduceIcon from "@/components/IntroduceIcon.vue";
import useSiteStore from "@/stores/site";

export default {
  name: "Welcome",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Button,
    IntroduceIcon,
  },
  methods: {
    findOut() {
      const store = useSiteStore();
      store.increaseSlide();
    },
  },
  async mounted() {
    this.$refs.component.classList.add("slideLeft");
  },
};
</script>

<style lang="scss" scoped>
.introduce-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 5rem;
  height: 80vh;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 750px) {
    column-gap: 1rem;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 0;
    align-items: unset;
  }
  @media screen and (max-width: 600px) {
    grid-template-rows: 0.75fr 1fr;
  }
  &__text {
    color: white;
    justify-self: end;
    @media screen and (max-width: 600px) {
      grid-column: 1/2;
      grid-row: 2/3;
      justify-self: unset;
    }
    @media screen and (max-width: 300px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h1 {
      font-size: 4rem;
      @media screen and (max-width: 1400px) {
        font-size: 2.5rem;
      }
      @media screen and (max-width: 750px) {
        font-size: 1.75rem;
      }
      @media screen and (max-width: 600px) {
        font-size: 2.75rem;
      }
      @media screen and (max-width: 400px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 300px) {
        font-size: 1.75rem;
      }
    }
    span {
      color: var(--orange);
    }
    p {
      font-family: "Indie Flower", cursive;
      font-size: 2rem;
      @media screen and (max-width: 1400px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 1100px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 750px) {
        font-size: 0.85rem;
      }
      @media screen and (max-width: 300px) {
        font-size: 0.75rem;
      }
    }
  }
}
</style>
