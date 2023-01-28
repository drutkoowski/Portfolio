<template>
  <ul>
    <li>
      <img src="@/assets/images/pl-flag.png" class="icon" />
      <img src="@/assets/images/en-flag.png" class="icon" />
    </li>
    <li><a href="https://github.com/drutkoowski">Github</a></li>
    <li>Resume</li>
    <li>About</li>
    <li><img src="@/assets/images/code.svg" alt="" class="icon code" /></li>
  </ul>
</template>

<script>
export default {
  name: "Navbar",
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
