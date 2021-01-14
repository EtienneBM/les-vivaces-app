<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  /* border-radius: 0px; */
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.26);
  /* padding: 0rem; */
  margin: 2rem auto;
  max-width: 40rem;
}
</style>