<template>
  <base-dialog :show="!!error" title="Il y a eu un problème" @close="handleError"><!-- 2 exclamation mark convert String to Boolean Value -->
    <p>{{ error }}</p>
  </base-dialog>
  <section class="fixed_element">
    <product-filter @change-filter="setFilters" class="control-card"></product-filter>
    <base-card >
      <div class="control-card controls">
        <base-button mode="outline" @click="loadProducts(true)">Refresh</base-button>
        <base-button link to="/auth?redirect=publish" v-if="!isLoggedIn">Login pour ajouter un produit</base-button>
        <base-button v-if="isLoggedIn && !isLoading" link to="/publish">
          Ajouter un produit
        </base-button>
      </div>
    </base-card>
  </section>
  <section>
    
    <div v-if="isLoading"><base-spinner></base-spinner></div>
    <ul v-else-if="hasProducts">
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
    ProductFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        plant: true,
        cutting: true,
        equipment: true,
      },
    };
  },
  computed: {
    filteredProducts() {
      const products = this.$store.getters["products/products"];
      return products.filter((product) => {
        if (this.activeFilters.plant && product.category.includes("plant")) {
          return true;
        }
        if (
          this.activeFilters.cutting &&
          product.category.includes("cutting")
        ) {
          return true;
        }
        if (
          this.activeFilters.equipment &&
          product.category.includes("equipment")
        ) {
          return true;
        }
        return false;
      });
    },
    isLoggedIn(){
      return this.$store.getters.isAuthenticated;
    },
    hasProducts() {
      return !this.isLoading || this.$store.getters["products/hasProducts"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadProducts(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("products/loadProducts",{forceRefresh: refresh});
      } catch (error) {
        this.error = error.message || "Soucis de chargement";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  },
  created() {
    this.loadProducts();
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

.control-card {
  padding: 1rem;
}

.fixed_element{
  position: fixed;
  margin-left: 2rem;
}
</style>