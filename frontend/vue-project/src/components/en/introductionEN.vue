<template>
<v-container id="introduction"  >
    <v-row>
        <v-col>
            <v-card color="background" class="hobbiesCards" >
                <h1 class="title">Software Engineer & Web Developer</h1>
                <p style="color: lightgray;">
                    An ambitious software engineer who brings more than just technical skills. I bring problem-solving abilities and motivation to deliver real value.
                </p>
                <div class="button-group">
                    <v-btn color="itemsPrimary" class="cvButton" href="/cv/Vit_Vodicka_cv_EN.pdf" target="_blank">Show CV</v-btn>
                    <v-btn color="itemsTertiary" target="_blank" href="https://www.linkedin.com/in/v%C3%ADt-vodicka-639bb4245/"  class="cvButton">Linkedin</v-btn>
                </div>
            </v-card>

        </v-col>

        <v-col>
            <v-img :src="profile" rounded="circle" width="250" height="250" ></v-img>
        </v-col>

    </v-row>
</v-container>
</template>
<script>
import profile from '@/assets/profile.jpg'

export default {
    name: 'IntroductionEN',
    data() {
        return {
            profile
        }
    }
    };
</script>
<style scoped>
.title{
    font-weight: 800;
    margin-bottom: 10px;
}
.button-group {
  display: flex;
  gap: 20px;  
  margin-top: 15px;
  
}

.cvButton {
  display: inline-flex;                
  color: white;
  padding: 15px 25px;                  
  border-radius: 12px;                 
  font-weight: 600;                   
                       
  width: auto !important;              
  height: auto !important;             
  text-transform: none; 
}
</style>