<template>
  <base-card>
    <h3>{{ name }}</h3>
    <h4>Prix : {{ cost }} €</h4>
    <div>
      <span>{{ category }}</span>
    </div>
    <div class="action">
      <base-button
        ><router-link :to="userContactLink">
          Contacter
        </router-link></base-button
      >
      <base-button
        ><router-link :to="productDetailsLink">
          Voir les détails
        </router-link></base-button
      >
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    name: String,
    cost: Number,
    category: String,
    ownerId: String,
    productId: String,
  },
  computed: {
    userContactLink() {
      return "/users/" + this.ownerId + "/contact";
    },
    productDetailsLink() {
      return this.$route.path + "/" + this.productId;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>