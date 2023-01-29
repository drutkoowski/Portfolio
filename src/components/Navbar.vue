<template>
  <ul>
    <li>
      <img src="/images/pl-flag.png" id="pl" class="icon" @click.prevent="changeLocale" />
      <img src="/images/en-flag.png" id="en" class="icon" @click.prevent="changeLocale" />
    </li>
    <li><a href="https://github.com/drutkoowski" target="_blank">Github</a></li>
    <li>
      <a :href="pdfHref" target="_blank">{{ $t("navbar.resume") }}</a>
    </li>
    <li>{{ $t("navbar.contact") }}</li>
    <li><img src="/images/code.svg" alt="" class="icon code" /></li>
  </ul>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      pdfHref:
        this.$i18n.locale === "pl"
          ? "/images/Damian_Rutkowski_CV_pl_compressed.pdf"
          : "/images/Damian_Rutkowski_CV_en_compressed.pdf",
    };
  },
  methods: {
    changeLocale(e) {
      const lang = e.target.id;
      this.$i18n.locale = lang === "pl" ? "en" : "pl";
      this.pdfHref =
        lang === "pl"
          ? "/images/Damian_Rutkowski_CV_en_compressed.pdf"
          : "/images/Damian_Rutkowski_CV_pl_compressed.pdf";
    },
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  font-size: 2.5rem;
  list-style: none;
  li {
    margin: 0 1rem;
    text-transform: uppercase;
    color: var(--white);
    transition: all 0.3s ease-in;
    cursor: pointer;
    &:not(:first-of-type):hover {
      transform: scale(1.03);
    }
  }
}

ul li:nth-of-type(2) {
  margin-left: auto;
}
ul li:last-of-type {
  margin-right: 5rem;
}

ul li:not(:first-of-type):after {
  content: "";
  display: block;
  width: 0;
  height: 5px;
  background: var(--orange);
  transition: width 0.3s;
}

ul li:not(:first-of-type):hover::after {
  width: 100%;
}

.icon {
  width: 2.5rem;
  height: 2rem;
  border-radius: 5px;
  margin: 0 0.25rem;
  transition: all 0.3s ease-in;
  &:hover {
    transform: scale(1.15);
  }
  &:last-of-type {
    fill: var(--orange);
  }
}

.code {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
