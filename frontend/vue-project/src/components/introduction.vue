<template>
<v-container  >
    <v-row>
        <v-col>
            <v-card color="background" class="hobbiesCards" >
                <h1 class="title">software engineer</h1>
                <p style="color: lightgray;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco l
                </p>
                <div class="button-group">
                    <v-btn color="itemsPrimary" class="cvButton">Zobrazit CV</v-btn>
                    <v-btn color="itemsTertiary" class="cvButton">Zobrazit CV</v-btn>
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
    name: 'Introduction',
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