<script setup>
//import '@/assets/global.css'

import iconCz from '@/assets/icon-cz.png'
import github from '@/assets/github.png'
import linkedin from '@/assets/linkedin.png'
import HeaderVue from '@/layouts/headerVue.vue'
import FooterVue from '@/layouts/footerVue.vue'

import { ref } from 'vue'
const lang = ref('cs')

const toggleLang = () => {
  lang.value = lang.value === 'cs' ? 'en' : 'cs'
}

</script>

<template>
  <v-app>

  <HeaderVue />
  
  <v-main>
  <router-view />
  
  

  
  </v-main>
  <footer-vue />
  </v-app>

</template>

<style scoped>
.linkedin-icon {
  margin-left: 20px;
} 
</style>
