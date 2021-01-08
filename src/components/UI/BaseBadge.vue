<template>
  <span class="badge" :class="type">
    {{ printedText }}
  </span>
</template>

<script>
export default {
    props: ['type','text'],
    computed: {
      printedText(){
        if(this.text === 'plant'){
          return 'Plante';
        } else if (this.text === 'cutting'){
          return 'Boutture';
        } else if (this.text === 'equipment'){
          return 'Accessoire';
        } else {
          return 'Inconnu';
        }
      }
    }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.plant {
  background-color: #008d18;
  color: white;
}

.cutting {
  background-color: #1f008d;
  color: white;
}

.equipment {
  background-color: #8d006e;
  color: white;
}

.undefined {
  background-color: #8d8b00;
  color: white;
}
</style>