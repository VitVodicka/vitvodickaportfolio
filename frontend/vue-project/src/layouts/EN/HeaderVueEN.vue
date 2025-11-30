<template>
    <v-app-bar color="itemsPrimary" >
    
  <v-app-bar-title>Logo</v-app-bar-title>

  <v-spacer />

  <v-btn variant="text" to="/">Domů</v-btn>
  <v-btn variant="text" to="/about">O nás</v-btn>
  <v-btn variant="text" to="/contact">Kontakt</v-btn>
   <v-btn variant="text" class="lang-btn">
    <v-img
      :src="iconCz"
      width="28"
      height="28"
      cover
    />
  </v-btn>
  
</v-app-bar>
</template>
<script >
import iconCz from '@/assets/icon-cz.png'
export default {
    name: 'HeaderVueEN',
    data() {
        return {
            iconCz
        }
    }
};
</script>