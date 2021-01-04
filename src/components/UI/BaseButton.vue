<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #FFA567;
  border: 1px solid #FFA567;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #FFA567;
  border-color: #FFA567;
}

.flat {
  background-color: transparent;
  color: #FFA567;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #FFA567;
  color: #FFA567;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style>