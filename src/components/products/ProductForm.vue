<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !name.isValid }">
      <label for="name">Nom</label>
      <input
        type="text"
        id="name"
        v-model.trim="name.val"
        @blur="clearValidity('name')"
      />
      <p v-if="!name.isValid">Le nom doit être renseigné.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      ></textarea>
      <p v-if="!description.isValid">La description doit être renseignée.</p>
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="cost">Prix</label>
      <input
        type="number"
        id="cost"
        v-model.number="cost.val"
        @blur="clearValidity('cost')"
      />
      <p v-if="!cost.isValid">
        Le prix doit être renseignée et suppérieur à 0.
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !category.isValid }">
      <h3>Catégorie</h3>
      <div>
        <input
          type="radio"
          name="category"
          id="plant"
          value="plant"
          v-model="category.val"
          @blur="clearValidity('category')"
        />
        <label for="plant">Plante</label>
      </div>
      <div>
        <input
          type="radio"
          name="category"
          id="cutting"
          value="cutting"
          v-model="category.val"
          @blur="clearValidity('category')"
        />
        <label for="cutting">Boutture</label>
      </div>
      <div>
        <input
          type="radio"
          name="category"
          id="equipment"
          value="equipment"
          v-model="category.val"
          @blur="clearValidity('category')"
        />
        <label for="equipment">Accessoire</label>
      </div>
      <p v-if="!category.isValid">Vous devez choisir une catégorie.</p>
    </div>
    <p v-if="!formIsValid">
      Veuillez compléter correctement l'ensemble des champs ci-dessus.
    </p>
    <base-button>Ajouter</base-button>
  </form>
</template>

<script>
export default {
  emits: ["saved-data"],
  data() {
    return {
      name: { val: "", isValid: true },
      cost: { val: null, isValid: true },
      description: { val: "", isValid: true },
      category: { val: null, isValid: true },
      formIsValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.cost.val || this.cost < 0) {
        this.cost.isValid = false;
        this.formIsValid = false;
      }
      if (!this.category.val) {
        this.category.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const formData = {
        name: this.name.val,
        cost: this.cost.val,
        description: this.description.val,
        category: this.category.val,
      };
      this.$emit("saved-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>