<template>
  <button type="button">{{ text }}</button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Button",
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 4rem;
  text-transform: uppercase;
  background-color: var(--orange);
  color: var(--white);
  font-size: 1.5rem;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  animation: pulse 8s infinite;
  &:hover {
    transform: scale(1.05);
    background-color: var(--white);
    color: var(--orange);
  }
}
@keyframes pulse {
  0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  15% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
}
</style>
