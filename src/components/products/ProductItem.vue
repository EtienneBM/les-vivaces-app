<template>
  <base-card>
    <div class="img_class">
      <img src="../../assets/Begonia_1.jpg" alt="Bégonia" />
    </div>
    <section>
      <head>
        <div>
          <h3>{{ name }}</h3>
          <h4>Prix : {{ cost }} €</h4>
        </div>
        <div>
          <base-imagebadge :text="category"></base-imagebadge>
          <!-- <base-badge :type="category" :text="category"></base-badge> -->
        </div>
      </head>

      <div class="actions">
        <base-button link :to="userContactLink" mode="outline">
          Contacter
        </base-button>
        <base-button link :to="productDetailsLink">
          Voir les détails
        </base-button>
      </div>
    </section>
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
      // return "/users/" + this.ownerId + "/contact";
      return this.$route.path + "/" + this.productId + "/contact";
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

section {
  padding: 1rem;
}

.img_class img {
  width: 100%;
  max-height: 20rem;
  display: flex;
  justify-content: center;
  object-fit: cover;
}

.actions {
  margin: 1rem;
  display: flex;
  justify-content: flex-end;
}

head {
  display: flex;
  justify-content: space-between;
}
</style>