<template>

    <v-container class="pa-4" id="whattobring">
    <h2>What can I bring?</h2>
    <v-row>



<v-col cols="3">
<v-card color="background" class="hirringCards" >
    <v-img
            :src="briefcase"
            width="40"
            height="40"
            
            ma-2
          />
    <v-card-title>2+ years of experience</v-card-title>
    
    <v-card-text>
        <p class="hiringText">I have over 2 years of experience in .NET, web development and APIs. Working on international projects improved my independence, communication, and ability to grasp new codebases. Which enabled me to bring value from the Czech Republic and abroad.</p>
    </v-card-text>
</v-card>
</v-col>
<v-col cols="3">
<v-card color="background" class="hirringCards" >
    <v-img
            :src="flash"
            width="40"
            height="40"
            
            ma-2
          />
    <v-card-title>Fast learning</v-card-title>
    
    <v-card-text>
        <p class="hiringText">I am a fast learner when it comes to new technologies and processes. I have worked with various stacks, from C#/backend to frontend, data processing, and optimization. This allows me to easily adapt to the needs of a project and become useful within the first few weeks.</p>
    </v-card-text>
</v-card>
</v-col>

<v-col cols="3">
<v-card color="background" class="hirringCards" >
    <v-img
            :src="light"
            width="40"
            height="40"
            
            ma-2
          />
    <v-card-title>Proactive approach</v-card-title>
    
    <v-card-text>
        <p class="hiringText">I actively seek ways to improve the product and technical solutions. I contribute my own ideas, automation, and optimization to increase work efficiency and reduce unnecessary workload on the team. I am able to take the initiative and propose practical improvements.</p>
    </v-card-text>
</v-card>
</v-col>

<v-col cols="3">
<v-card color="background" class="hirringCards
" >
    <v-img
            :src="chip"
            width="40"
            height="40"
            
            ma-2
          />
    <v-card-title>Technical mindset</v-card-title>
    
    <v-card-text>
        <p class="hiringText">I can apply technical thinking when solving more complex tasks. I think about code structure, performance, and sustainability, and I know how to work with APIs, data, and application logic. This allows me to identify problems early on and deliver stable solutions.</p>
    </v-card-text>
</v-card>
</v-col>


  </v-row>
  </v-container>
  <div class="spacer"></div>
</template>
<script >
import iconCz from '@/assets/icon-cz.png'
import briefcase from '@/assets/hirringIcons/briefcase.png'
import light from '@/assets/hirringIcons/light-bulb.png'
import chip from '@/assets/hirringIcons/chip.png'
import flash from '@/assets/hirringIcons/flash.png'

export default {
    name: 'WhatToBringEN',data() {
        return {
            iconCz,
            light,
            briefcase,
            chip,
            flash
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
h2{
    margin-bottom: 20px;
    margin-top: 50px;
}
.hirringCards {
    border: 2px solid  #374151;
    border-radius: 5px;
    display: flex;
    flex-direction: column ;
    align-items: center;
    padding: 20px;
    text-align: center;
    height: 100%


}
.spacer{
    margin-bottom: 100px;
}


</style>