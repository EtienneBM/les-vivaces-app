<template>
  <section>
    <base-card>
      <h2>{{ name }}</h2>
      <h3>Prix: {{ cost }} €</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Intéressé ? Commandez maintenant !</h2>
        <base-button link :to="contactLink">Contacter</base-button>
        <router-view></router-view>
      </header>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge :type="category" :text="category"></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedProduct: null,
    };
  },
  computed: {
    name() {
      return this.selectedProduct.name;
    },
    cost() {
      return this.selectedProduct.cost;
    },
    category() {
      return this.selectedProduct.category;
    },
    description() {
      return this.selectedProduct.description;
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
  },
  created() {
    this.selectedProduct = this.$store.getters["products/products"].find(
      (product) => product.id === this.id
    );
    this.$store.dispatch("products/addCurrentProduct", this.selectedProduct);
  },
};
</script>