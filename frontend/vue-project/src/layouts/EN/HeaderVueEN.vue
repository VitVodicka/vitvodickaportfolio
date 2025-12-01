<template>
    <v-app-bar color="itemsPrimary" >
    
  <v-app-bar-title class="d-flex align-center">
    <router-link to="/" class="logo-link">
      <v-img
        :src="logo"
        width="120"
        height="auto"
        contain
      />
    </router-link>
  </v-app-bar-title>

  <v-spacer />

  <v-btn variant="text" href="#introduction">Home</v-btn>
  <v-btn variant="text" href="#about">About</v-btn>
  <v-btn variant="text" href="#skills">Skills</v-btn>
  <v-btn variant="text" href="#projects">Projects</v-btn>
  <v-btn variant="text" href="#whattobring">What can I bring</v-btn>

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
import logo from '@/assets/logo.png'


const languageStore = useLanguageStore()
</script>
