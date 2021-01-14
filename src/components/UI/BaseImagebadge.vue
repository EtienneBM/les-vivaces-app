<template>
  <img :src="printedLogo" :alt="text" />
</template>

<script>
export default {
  props: ["text"],
  computed: {
    printedLogo() {
      return require('../../assets/' + this.text + "_logo.png");
    },
  },
};
</script>

<style scoped>
img{
    max-width: 5rem;
    box-shadow: 2px 2px 2px rgba(194,194,194,0.5);
}
</style>