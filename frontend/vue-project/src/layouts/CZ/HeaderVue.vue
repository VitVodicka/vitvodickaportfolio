<template>
  <v-app-bar color="itemsPrimary">
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

    <v-btn variant="text" href="#introduction">Domů</v-btn>
    <v-btn variant="text" href="#about">O mě</v-btn>
    <v-btn variant="text" href="#skills">Dovednosti</v-btn>
    <v-btn variant="text" href="#projects">Projekty</v-btn>
    <v-btn variant="text" href="#whattobring">Co mohu přinést</v-btn>

    <v-btn variant="text" class="lang-btn">
      <v-img
        :src="iconEN"
        width="28"
        height="28"
        cover
        @click="languageStore.setLanguage('en')"
      />
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import iconEN from '@/assets/icon-en.png'
import { useLanguageStore } from '@/stores/languageStore'
import { ref } from 'vue'
import logo from '@/assets/logo.png'


const languageStore = useLanguageStore()
</script>
