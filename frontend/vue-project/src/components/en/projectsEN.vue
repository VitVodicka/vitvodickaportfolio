<template>
  <v-container id="projects">
    <h2>Projects</h2>
    <v-row>
      <v-col >
        <v-card color="background" class="projectsCards" >
          <v-img :src="map" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">GridPath</v-card-title>
          <v-card-text>
            <p class="paragraph">Backend application for calculating optimal cable routing across cadastral parcels. It uses parcel ratings, spatial constraints, and an optimization algorithm to find cost-effective routes.</p>
          

            <div class="projectsChips">
              <v-chip class="v-chip">C# .NET</v-chip>
              <v-chip class="v-chip">ASP.NET</v-chip>
              <v-chip class="v-chip">MVC</v-chip>
            </div>
            <a href="https://github.com/VitVodicka/GridPath" >Source code</a>
            
          </v-card-text>
        </v-card>
      </v-col>


      <v-col >
        <v-card color="background" class="projectsCards" >
          <v-img :src="portfolioEN" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">Portfolio web</v-card-title>
          <v-card-text>
            <p class="paragraph">Personal portfolio website for presenting projects, skills, and experience. Built on Vue 3 and Vuetify, written in TypeScript with an emphasis on clean design, responsive layout, and easy content management.</p>
          

            <div class="projectsChips">
              <v-chip style="flex" class="v-chip">Vue</v-chip>
              <v-chip style="flex" class="v-chip">Typescript</v-chip>

            </div>
            <a class="links" href="https://github.com/VitVodicka/vitvodickaportfolio" >Source code</a>
            
          </v-card-text>
        </v-card>
      </v-col>



      </v-row>
      </v-container>
</template>
<style scoped>
.projectsCards {
    border: 2px solid  #374151;
    border-radius: 5px;

}
.projectsChips {
    display:flex; 
    flex-wrap:wrap; 
    gap:8px;
}
.paragraph {
    color: lightgray;
    max-width: 60ch;
    margin-bottom: 15px;
}
.cardTitle{
    font-weight: 700;
}
a{
    color: #137fec;
    text-decoration: none;
    cursor: pointer;
}
h2{
  margin-bottom: 20px;
  margin-top: 50px;
}
</style>
<script >
import  profile  from '@/assets/profile.jpg';
import map from '@/assets/map.png'
import portfolioEN from '@/assets/projects/portfolioEN.png'

export default{
    name: 'ProjectsEN', data() {
        return {
            profile,  portfolioEN, map
        }
    }
};
</script>