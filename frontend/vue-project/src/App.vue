<script setup>
//import '@/assets/global.css'

import iconCz from '@/assets/icon-cz.png'
import github from '@/assets/github.png'
import linkedin from '@/assets/linkedin.png'
import HeaderVue from '@/layouts/CZ/HeaderVue.vue'
import FooterVue from '@/layouts/CZ/footerVue.vue'
import { useLanguageStore } from './stores/languageStore'
import { onMounted, ref } from 'vue'
import HeaderVueEN from '@/layouts/EN/HeaderVueEN.vue'
import FooterVueEN from '@/layouts/EN/footerVueEN.vue'

const languageStore = useLanguageStore();





</script>

<template>
  <v-app>
  <HeaderVue v-if="languageStore.language === 'cz'" />
  <HeaderVueEN v-else />
  
  <v-main>
  <router-view />
  
  

  
  </v-main>
  <footer-vue v-if="languageStore.language === 'cz'" />
  <footer-vueEN v-else />
  </v-app>

</template>

<style scoped>
.linkedin-icon {
  margin-left: 20px;
} 
</style>
