<template>
  <div>
    <h2>{{ $t("projects.description") }}</h2>
    <p>{{ description }}</p>
    <h2>{{ $t("projects.technologies") }}</h2>
    <div class="technologies">
      <TechElement
        v-for="tech in technologies"
        :key="tech"
        :text="tech"
        :imgSrc="this.getPath(tech)"
      />
    </div>
  </div>
</template>

<script>
import TechElement from "@/components/TechElement.vue";
export default {
  name: "ProjectInfo",
  components: { TechElement },
  props: {
    description: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getPath(tech) {
      const array = ["Daphne", "WSGI/ASGI", "Channels", "DRF"];
      if (array.includes(tech)) return "django.svg";
      return tech.toLowerCase() + ".svg";
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  padding: 0 0 1rem 0;
  font-size: 1.5em;
  @media screen and (max-width: 650px) {
    font-size: 1.15em;
  }
}
.technologies {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  li {
    display: grid;
    grid-template-columns: auto 1fr;
  }
}
</style>
