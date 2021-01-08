<template>
  <section>
    <base-card>
      <h2>Ajouter un objet</h2>
      <product-form @saved-data="storeData"></product-form
    ></base-card>
  </section>
</template>

<script>
import ProductForm from "../../components/products/ProductForm.vue";

export default {
  components: {
    ProductForm,
  },
  methods: {
      storeData(data){
        this.$store.dispatch('products/addProduct', data);
        this.$router.replace('/products');  
      },
  }
};
</script>