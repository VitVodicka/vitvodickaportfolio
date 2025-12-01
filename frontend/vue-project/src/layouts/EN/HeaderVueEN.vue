<template>
    <v-app-bar color="itemsPrimary" >
    
  <v-app-bar-title>Logo</v-app-bar-title>

  <v-spacer />

  <v-btn variant="text" to="/">Home</v-btn>
  <v-btn variant="text" to="/about">About</v-btn>
  <v-btn variant="text" to="/contact">Skills</v-btn>
  <v-btn variant="text" to="/contact">Projects</v-btn>
  <v-btn variant="text" to="/contact">What can I bring</v-btn>

   <v-btn variant="text" class="lang-btn">
    <v-img
      :src="iconCZ"
      width="28"
      height="28"
      cover
      @click="languageStore.setLanguage('cz')"
    />
  </v-btn>
  
</v-app-bar>
</template>
<script setup>
import iconCZ from '@/assets/icon-cz.png'
import { useLanguageStore } from '@/stores/languageStore'
import { ref } from 'vue'


const languageStore = useLanguageStore()
</script>
