<template>
  <base-card>
    <h2>Trouvez la plante de vos rêves</h2>
    <span class="filter-option">
      <input type="checkbox" id="plant" checked @change="setFilter" />
      <label for="plant">Plante</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="cutting" checked @change="setFilter" />
      <label for="cutting">Boutures</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="equipment" checked @change="setFilter" />
      <label for="equipment">Accessoires</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        plant: true,
        cutting: true,
        equipment: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>