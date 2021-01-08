<template>
  <section><product-filter @change-filter="setFilters"></product-filter></section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadProducts">Refresh</base-button>
        <base-button link to="/publish"> Ajouter un produit </base-button>
      </div>
    </base-card>
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
import ProductItem from "../../components/products/ProductItem.vue";
import ProductFilter from "../../components/products/ProductFilter.vue";

export default {
  components: {
    ProductItem,
    ProductFilter
  },
  data() {
    return {
      activeFilters: {
        plant: true,
        cutting: true,
        equipment: true,
      }
    }
  },
  computed: {
    filteredProducts() {
      const products = this.$store.getters["products/products"];
      return products.filter(product => {
        if (this.activeFilters.plant && product.category.includes('plant')){
          return true;
        }
        if (this.activeFilters.cutting && product.category.includes('cutting')){
          return true;
        }
        if (this.activeFilters.equipment && product.category.includes('equipment')){
          return true;
        }
        return false;
      });
    },
    hasProducts() {
      return this.$store.getters["products/hasProducts"];
    },
  },
  methods: {
    setFilters(updatedFilters){
      this.activeFilters = updatedFilters;
    },
    loadProducts() {
      this.$store.dispatch('products/loadProducts');
    },
  },
  created(){
    this.loadProducts();
  }
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