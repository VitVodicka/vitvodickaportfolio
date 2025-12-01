<template>
  <v-app-bar color="itemsPrimary">
    <v-app-bar-title>Logo</v-app-bar-title>

    <v-spacer />

    <v-btn variant="text" to="/">Domů</v-btn>
    <v-btn variant="text" to="/about">O mě</v-btn>
    <v-btn variant="text" to="/contact">Dovednosti</v-btn>
    <v-btn variant="text" to="/contact">Projekty</v-btn>
    <v-btn variant="text" to="/contact">Co mohu přinést</v-btn>

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


const languageStore = useLanguageStore()
</script>
