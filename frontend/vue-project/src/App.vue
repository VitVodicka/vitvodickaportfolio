<script setup>
//import '@/assets/global.css'
import HeaderVue from '@/components/HeaderVue.vue'
import FooterVue from '@/components/FooterVue.vue'
import iconCz from '@/assets/icon-cz.png'
import github from '@/assets/github.png'
import linkedin from '@/assets/linkedin.png'

import { ref } from 'vue'
const lang = ref('cs')

const toggleLang = () => {
  lang.value = lang.value === 'cs' ? 'en' : 'cs'
}

</script>

<template>
  <v-app>
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
  
  <v-main>
  <router-view />
  
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

  
  </v-main>
  <v-footer color="itemsPrimary" height="auto" >
    <v-container>
      <v-row justify="center">
      <v-footer-text>&copy; Created by Vít Vodička, 2025</v-footer-text>
      </v-row>
      <v-row >
        <v-col cols="12" sm="6">
          <v-row>
         <v-footer-text>Email: vitvodick1@gmail.com</v-footer-text>
         </v-row>
         <v-row>
        <v-footer-text>Phone: +420 722 410 458</v-footer-text>
        </v-row>
        </v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col cols="auto" >
          <v-row justify="end">
          <a href="https://github.com/VitVodicka">
          <v-img
            :src="github"
            width="40"
            height="40"
            cover
            ma-2
          />
          </a>
          <a href="https://www.linkedin.com/in/v%C3%ADt-vodicka-639bb4245/">
          <v-img
            :src="linkedin"
            width="40"
            height="40"
            cover
            class="linkedin-icon"
          />
          </a>
          </v-row>
        </v-col>
        

        
      </v-row>
    </v-container>
  </v-footer>
  </v-app>
</template>

<style scoped>
.linkedin-icon {
  margin-left: 20px;
} 
</style>
