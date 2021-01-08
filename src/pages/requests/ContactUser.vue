<template>
  <form @submit.prevent="submitForm">
    <div class="form-action">
      <label for="email">Votre email</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-action">
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!formIsValid">Les données sont invalides</p>
    <div class="actions">
      <base-button>Envoyer</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
      selectedProduct: null,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      //test the validity of the form
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.formIsValid = false;
        return;
      }
      
      const data = {
        email: this.email,
        message: this.message,
        ownerId: this.$store.getters['products/currentProduct'].ownerId, // access Id from product object -> composant non réutilisable sur une page non liée à un produit
      };
      console.log(data);
      this.$store.dispatch("requests/contactUser", data);
      this.$router.replace('/products');
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>