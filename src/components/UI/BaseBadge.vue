<template>
  <span class="badge" :class="type">
    {{ printedText }}
  </span>
</template>

<script>
export default {
    props: ['type','text'],
    computed: {
      // printedLogo(){
      //   return '../../assets/'+this.text+'_logo.png';
      // },
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
  background-color: #2E662B;
  color: white;
}

.cutting {
  background-color: #98D84A;
  color: white;
}

.equipment {
  background-color: #FFA567;
  color: white;
}

.undefined {
  background-color: #E0E0E0;
  color: white;
}
</style>