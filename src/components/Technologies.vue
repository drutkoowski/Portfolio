<template>
  <div class="slider-container__content__description" ref="desc">
    <h1>{{ $t("technologies.heading") }}</h1>
    <div class="slider-container__content__description__container">
      <div>
        <TechHeading text="Frontend" imgSrc="frontend.svg" />
        <ul>
          <TechElement text="HTML5" imgSrc="html5.svg" />
          <TechElement text="CSS3" imgSrc="css3.svg" />
          <TechElement text="SCSS" imgSrc="sass.svg" />
          <TechElement text="Javascript" imgSrc="javascript.svg" />
          <TechElement text="Vue" imgSrc="vue.svg" />
          <TechElement text="Vite" imgSrc="vite.svg" />
          <TechElement text="Bootstrap" imgSrc="bootstrap.svg" />
          <TechElement text="Tailwind" imgSrc="tailwind.svg" />
          <TechElement text="Chart.js" imgSrc="chartjs.svg" />
        </ul>
      </div>
      <div>
        <TechHeading text="Backend" imgSrc="backend.svg" />
        <ul>
          <TechElement text="Python" imgSrc="python.svg" />
          <TechElement text="Django" imgSrc="django.svg" />
          <TechElement text="Django Rest Framework" imgSrc="drf.png" />
          <TechElement text="Channels" imgSrc="django.svg" />
          <TechElement text="Flask" imgSrc="flask.svg" />
          <TechElement text="WSGI/ASGI" imgSrc="django.svg" />
          <TechElement text="MySQL" imgSrc="mysql.svg" />
          <TechElement text="Postgres" imgSrc="postgres.svg" />
          <TechElement text="Websockets" imgSrc="websockets.svg" />
          <TechElement text="JWT" imgSrc="jwt.svg" />
        </ul>
      </div>
      <div>
        <TechHeading :text="$t('technologies.tools')" imgSrc="tools.svg" />
        <ul>
          <TechElement text="Axios" imgSrc="axios.svg" />
          <TechElement text="Figma" imgSrc="figma.svg" />
          <TechElement text="Postman" imgSrc="postman.svg" />
          <TechElement text="GitHub" imgSrc="github.svg" />
          <TechElement text="Docker" imgSrc="docker.svg" />
          <TechElement text="Nginx" imgSrc="nginx.svg" />
          <TechElement text="Redis" imgSrc="redis.svg" />
          <TechElement text="PyCharm" imgSrc="pycharm.svg" />
          <TechElement text="Visual Studio Code" imgSrc="vsc.svg" />
          <TechElement text="AWS (EC2, EB, S3)" imgSrc="aws.svg" />
          <TechElement text="Heroku" imgSrc="heroku.svg" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TechElement from "@/components/TechElement.vue";
import TechHeading from "@/components/TechHeading.vue";

export default {
  name: "About",
  components: {
    TechElement,
    TechHeading,
  },
  created() {
    this.yearsOld = new Date().getFullYear() - 2000;
  },
  mounted() {
    this.$refs.desc.classList.add("slideLeft");
  },
};
</script>

<style lang="scss" scoped>
.slider-container__content__description {
  grid-column: 1/3;
  @media screen and (max-width: 1000px) {
    justify-content: center;
  }
  h1 {
    font-size: 3.5em;
    color: var(--orange);
    @media screen and (max-width: 1100px) {
      font-size: 2.5em;
    }
  }
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
    @media screen and (max-width: 400px) {
      height: 100%;
    }
    div {
      ul {
        padding: 0 0;
        margin: 3rem 0;
        list-style: none;
        @media screen and (max-width: 1000px) {
          margin: 1rem 0;
        }
      }
    }
  }
}
</style>
