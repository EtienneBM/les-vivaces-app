<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/publish"> Ajouter un produit </router-link>
    </div>
    <ul v-if="hasProducts">
      <li v-for="product in filteredProducts" :key="product.id">
        <product-item
          :name="product.name"
          :cost="product.cost"
          :category="product.category"
          :ownerId="product.ownerId"
          :productId="product.id"
        >
        </product-item>
      </li>
    </ul>
    <h3 v-else>Aucune plante disponible</h3>
  </section>
</template>

<script>
import ProductItem from '../../components/products/ProductItem.vue';

export default {
    components: {
        ProductItem,
    },
  computed: {
    filteredProducts() {
      return this.$store.getters["products/products"];
    },
    hasProducts(){
        return this.$store.getters['products/hasProducts'];
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>