<template>
  <v-container>
    <h1>Projects</h1>
    <v-row>
      <v-col cols="4">
        <v-card color="background" class="hobbiesCards" >
          <v-img :src="profile" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">Frontend</v-card-title>
          <v-card-text>
            <p class="paragraph">lorem ipsum</p>
          

            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <v-chip style="flex" class="v-chip">ble</v-chip>
              <v-chip style="flex" class="v-chip">ble</v-chip>
              <v-chip style="flex" class="v-chip">ble</v-chip>
              <v-chip style="flex" class="v-chip">ble</v-chip>

            </div>
            <h4 href="" >Source code</h4>
            
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="background" class="hobbiesCards" >
          <v-card-title>Frontend</v-card-title>
          <v-card-text>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <v-chip style="flex" class="v-chip">ble</v-chip>
              <v-chip style="flex" class="v-chip">ble</v-chip>
              <v-chip style="flex" class="v-chip">ble</v-chip>
              <v-chip style="flex" class="v-chip">ble</v-chip>

            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="background" class="hobbiesCards" >
          <v-card-title>Frontend</v-card-title>
          <v-card-text>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <v-chip style="flex" class="v-chip">ble</v-chip>
              <v-chip style="flex" class="v-chip">ble</v-chip>
              <v-chip style="flex" class="v-chip">ble</v-chip>
              <v-chip style="flex" class="v-chip">ble</v-chip>

            </div>
          </v-card-text>
        </v-card>
      </v-col>


      </v-row>
      </v-container>
</template>
<style scoped>
.hobbiesCards {
    border: 2px solid  #374151;
    border-radius: 5px;

}
.paragraph {
    color: lightgray;
    max-width: 60ch;
    margin-bottom: 15px;
}
.cardTitle{
    font-weight: 700;
}
h4{
    margin-top: 15px;
    color: #137fec;
    cursor: pointer;
}
</style>
<script >
import  profile  from '@/assets/profile.jpg';

export default{
    name: 'Projects', data() {
        return {
            profile
        }
    }
};
</script>