<template>
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
</template>
<script >
import github from '@/assets/github.png'
import linkedin from '@/assets/linkedin.png'
export default {
    name: 'FooterVueEN',
    data() {
        return {
            github,
            linkedin
        }
    }
};
</script>
<style scoped>
.linkedin-icon {
    margin-left: 20px;
}
</style>