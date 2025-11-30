<template>

    <v-container class="pa-4">
    <h1>Why hire me</h1>
    <v-row>



<v-col cols="3">
<v-card color="background" class="hobbiesCards" >
    <v-img
            :src="github"
            width="40"
            height="40"
            cover
            ma-2
          />
    <v-card-title>International Experience</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis alias odit quaerat! Veniam, ipsa voluptatem aut maxime praesentium natus dolor, placeat, dicta molestias amet ea earum nostrum. Totam, facere!</p>
    </v-card-text>
</v-card>
</v-col>
<v-col cols="3">
<v-card color="background" class="hobbiesCards" >
    <v-img
            :src="github"
            width="40"
            height="40"
            cover
            ma-2
          />
    <v-card-title>International Experience</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis alias odit quaerat! Veniam, ipsa voluptatem aut maxime praesentium natus dolor, placeat, dicta molestias amet ea earum nostrum. Totam, facere!</p>
    </v-card-text>
</v-card>
</v-col>

<v-col cols="3">
<v-card color="background" class="hobbiesCards" >
    <v-img
            :src="github"
            width="40"
            height="40"
            cover
            ma-2
          />
    <v-card-title>International Experience</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis alias odit quaerat! Veniam, ipsa voluptatem aut maxime praesentium natus dolor, placeat, dicta molestias amet ea earum nostrum. Totam, facere!</p>
    </v-card-text>
</v-card>

</v-col>
<v-col cols="3">
<v-card color="background" class="hobbiesCards" >
    <v-img
            :src="github"
            width="40"
            height="40"
            cover
            ma-2
          />
    <v-card-title>International Experience</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis alias odit quaerat! Veniam, ipsa voluptatem aut maxime praesentium natus dolor, placeat, dicta molestias amet ea earum nostrum. Totam, facere!</p>
    </v-card-text>
</v-card>
</v-col>


<v-col cols="3">
<v-card color="background" class="hobbiesCards" >
    <v-img
            :src="github"
            width="40"
            height="40"
            cover
            ma-2
          />
    <v-card-title>International Experience</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis alias odit quaerat! Veniam, ipsa voluptatem aut maxime praesentium natus dolor, placeat, dicta molestias amet ea earum nostrum. Totam, facere!</p>
    </v-card-text>
</v-card>
</v-col>

<v-col cols="3">
<v-card color="background" class="hobbiesCards" >
    <v-img
            :src="github"
            width="40"
            height="40"
            cover
            ma-2
          />
    <v-card-title>International Experience</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis alias odit quaerat! Veniam, ipsa voluptatem aut maxime praesentium natus dolor, placeat, dicta molestias amet ea earum nostrum. Totam, facere!</p>
    </v-card-text>
</v-card>
</v-col>








  </v-row>
  <v-row>
   

  </v-row>
  </v-container>
</template>
<script >
import iconCz from '@/assets/icon-cz.png'
import github from '@/assets/github.png'

export default {
    name: 'WhatToBring',data() {
        return {
            iconCz,
            github
        }
    }
};
</script>
<style scoped>
.hirringText {
    color: lightgray;
    text-align: center;
    max-width: 60ch;

}
.hobbiesCards {
    border: 2px solid  #374151;
    border-radius: 5px;
    display: flex;
    flex-direction: column ;
    align-items: center;
    padding: 20px;
    text-align: center;


}

</style>