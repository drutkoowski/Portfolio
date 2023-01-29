<template>
  <div class="slider-container__content__description" ref="desc">
    <h1>Projects</h1>
    <div class="slider-container__content__description__bookmark">
      <ul>
        <li class="selected" ref="nutri" @click.prevent="handleChange('Nutri')">
          <span>&#8226;</span> Nutri
        </li>
        <li ref="converseo" @click.prevent="handleChange('Converseo')">
          <span>&#8226;</span> Converseo
        </li>
        <li ref="ecommerce" @click.prevent="handleChange('Ecommerce')">
          <span>&#8226;</span> E-commerce
        </li>
        <li ref="musicly" @click.prevent="handleChange('Musicly')">
          <span>&#8226;</span> Musicly
        </li>
        <li ref="instaclone" @click.prevent="handleChange('InstaClone')">
          <span>&#8226;</span> InstaClone
        </li>
        <br />
        <li>
          <a href="https://github.com/drutkoowski" target="_blank">...and more</a>
        </li>
      </ul>
    </div>
    <ProjectInfo :description="description" :technologies="technologies" />
  </div>
  <div class="slider-container__content__images" ref="images">
    <ImageSlider
      :name="name"
      :images="images"
      :repoLink="repoLink"
      :demoLink="demoLink"
    />
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo.vue";
import ImageSlider from "@/components/ImageSlider.vue";

export default {
  name: "Projects",
  components: {
    ProjectInfo,
    ImageSlider,
  },
  data() {
    return {
      name: "Nutri",
      description:
        "Nutri is an app created for people who want to learn more about their nutrition and the exercises they do. It allows you to track your progress compared to personalized goals including access to data visualization.",
      technologies: [
        "Python",
        "Django",
        "HTML5",
        "SASS",
        "CSS3",
        "Javascript",
        "MySQL",
        "Postgres",
        "Heroku",
        "AWS",
      ],
      images: [
        "/src/assets/images/nutri5.png",
        "/src/assets/images/nutri6.png",
        "/src/assets/images/nutri7.png",
        "/src/assets/images/nutri0.png",
        "/src/assets/images/nutri1.png",
        "/src/assets/images/nutri2.png",
        "/src/assets/images/nutri3.png",
        "/src/assets/images/nutri4.png",
      ],
      demoLink: "https://nutri-django.herokuapp.com",
      repoLink: "https://github.com/drutkoowski/Nutri-Django",
    };
  },
  mounted() {
    this.$refs.desc.classList.add("slideLeft");
    this.$refs.images.classList.add("slideLeft");
  },
  methods: {
    handleChange(projectName) {
      document.querySelector(".selected").classList.remove("selected");
      if (projectName === "Nutri") {
        this.name = "Nutri";
        this.$refs.nutri.classList.add("selected");
        this.description =
          "Nutri is an app created for people who want to learn more about their nutrition and the exercises they do. It allows you to track your progressagainst goals personalized for the user who has access to data visualization.";
        this.technologies = [
          "Python",
          "Django",
          "HTML5",
          "SASS",
          "CSS3",
          "Javascript",
          "MySQL",
          "Postgres",
          "Heroku",
          "AWS",
        ];
        this.images = [
          "/src/assets/images/nutri5.png",
          "/src/assets/images/nutri6.png",
          "/src/assets/images/nutri7.png",
          "/src/assets/images/nutri0.png",
          "/src/assets/images/nutri1.png",
          "/src/assets/images/nutri2.png",
          "/src/assets/images/nutri3.png",
          "/src/assets/images/nutri4.png",
        ];
        this.demoLink = "https://nutri-django.herokuapp.com";
        this.repoLink = "https://github.com/drutkoowski/Nutri-Django";
      }
      if (projectName === "Converseo") {
        this.name = "Converseo";
        this.$refs.converseo.classList.add("selected");
        this.description =
          "Converseo is an web app allowing the users to communicate with each other and look for new acquaintances. It allows you to search for people to talk with you.";
        this.technologies = [
          "Python",
          "Django",
          "DRF",
          "HTML5",
          "SASS",
          "Javascript",
          "Vite",
          "Vue",
          "Axios",
          "AWS",
          "Nginx",
          "Docker",
          "Redis",
          "MySQL",
          "Tailwind",
          "Websockets",
          "JWT",
          "Daphne",
        ];
        this.images = [
          "/src/assets/images/converseo0.png",
          "/src/assets/images/converseo1.png",
          "/src/assets/images/converseo2.png",
          "/src/assets/images/converseo3.png",
          "/src/assets/images/converseo4.png",
          "/src/assets/images/converseo5.png",
        ];
        this.demoLink = "https://nutri-django.herokuapp.com";
        this.repoLink = "https://github.com/drutkoowski/Nutri-Django";
      }
      if (projectName === "Ecommerce") {
        this.name = "Ecommerce";
        this.$refs.ecommerce.classList.add("selected");
        this.description =
          "Django Ecommerce is an e-commerce (online store) web application. Thanks to this application users can order products, which can be easily entered by the site administrator (the seller) using the admin panel, which has been specially adapted for this purpose.";
        this.technologies = [
          "Python",
          "Django",
          "MySQL",
          "HTML5",
          "Bootstrap",
          "CSS3",
          "Javascript",
          "Postgres",
          "AWS",
        ];
        this.images = [
          "/src/assets/images/ecommerce0.png",
          "/src/assets/images/ecommerce1.png",
          "/src/assets/images/ecommerce2.png",
          "/src/assets/images/ecommerce3.png",
          "/src/assets/images/ecommerce4.png",
          "/src/assets/images/ecommerce5.png",
          "/src/assets/images/ecommerce6.png",
          "/src/assets/images/ecommerce7.png",
        ];
        this.demoLink =
          "http://django-env.eba-f3bedqv2.eu-central-1.elasticbeanstalk.com/accounts/login/";
        this.repoLink = "https://github.com/drutkoowski/django-ecommerce";
      }
      if (projectName === "Musicly") {
        this.name = "Musicly";
        this.$refs.musicly.classList.add("selected");
        this.description =
          "Musicly is a web application for music management. The user has the ability to create an account that allows him/her to add music, as well as to search for other users' tracks, listen to them and comment on them.";
        this.technologies = [
          "Vue",
          "Vite",
          "Firebase",
          "HTML5",
          "CSS3",
          "SASS",
          "Tailwind",
          "Axios",
        ];
        this.images = [
          "/src/assets/images/musicly0.png",
          "/src/assets/images/musicly1.png",
          "/src/assets/images/musicly2.png",
          "/src/assets/images/musicly3.png",
          "/src/assets/images/musicly4.png",
        ];
        this.demoLink = "https://musicly-ten.vercel.app";
        this.repoLink = "https://github.com/drutkoowski/Musicly";
      }
      if (projectName === "InstaClone") {
        this.name = "InstaClone";
        this.$refs.instaclone.classList.add("selected");
        this.description =
          "InstaClone is a social media application that allows users to contact their friends in an easy and fast way. They can also view other users' posts and stories or narrow down the results to only the people they follow. The person using the app can update data about himself to better show himself to others. Add photos, including profile picture, bio, or relationships visible to others. In addition, each user can like or comment on other users posts.";
        this.technologies = [
          "Python",
          "Django",
          "MySQL",
          "Postgres",
          "HTML5",
          "Bootstrap",
          "CSS3",
          "AWS",
          "Heroku",
        ];
        this.images = [
          "/src/assets/images/instaclone0.png",
          "/src/assets/images/instaclone1.png",
          "/src/assets/images/instaclone2.png",
          "/src/assets/images/instaclone3.png",
          "/src/assets/images/instaclone4.png",
          "/src/assets/images/instaclone5.png",
          "/src/assets/images/instaclone6.png",
          "/src/assets/images/instaclone7.png",
        ];
        this.demoLink = "https://thawing-scrubland-61997.herokuapp.com";
        this.repoLink = "https://github.com/drutkoowski/django-social-media";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-container__content__description {
  h1 {
    font-size: 3.5em;
    color: var(--orange);
    margin-top: 0;
  }

  &__bookmark {
    ul {
      padding: 0 0;
      li {
        display: inline;
        padding: 0 0.35rem;
        font-size: 1.25em;
        cursor: pointer;
        transition: all 0.3s ease-in;
        &:hover {
          color: var(--orange);
          transform: scale(1.05);
        }
        span {
          color: var(--orange);
        }
      }
    }
  }
}
.slider-container__content__images {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.3fr;
}
.selected {
  color: var(--orange);
}
</style>