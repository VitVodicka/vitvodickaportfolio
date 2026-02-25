<template>
  <v-container id="projects">
    <h2>Projekty</h2>
    <v-row>
      <v-col >
        <v-card color="background" class="projectsCards" >
          <v-img :src="map" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">GridPath</v-card-title>
          <v-card-text>
            <p class="paragraph">Backendová aplikace pro výpočet optimálního vedení kabelů přes katastrální parcely. Využívá hodnocení parcel, prostorová omezení a optimalizační algoritmus k nalezení nákladově efektivních tras.</p>
          

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
          <v-img :src="portfolio" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">Portfolio web</v-card-title>
          <v-card-text>
            <p class="paragraph">Osobní portfolio web pro prezentaci projektů, dovedností a zkušeností. Postavený na Vue 3 a Vuetify psaný typescriptem s důrazem na čistý design, responzivní layout a jednoduchou správu obsahu.</p>
          

            <div class="projectsChips">
              <v-chip style="flex" class="v-chip">Vue</v-chip>
              <v-chip style="flex" class="v-chip">Typescript</v-chip>

            </div>
            <a  href="https://github.com/VitVodicka/vitvodickaportfolio" >Zdrojový kod</a>
            
          </v-card-text>
        </v-card>
      </v-col>



      </v-row>
      </v-container>
</template>
<style scoped>
.projectsChips {
    display:flex; 
    flex-wrap:wrap; 
    gap:8px;
}
.projectsCards {
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
import portfolio from '@/assets/projects/portfolio.png'
import map from '@/assets/map.png'


export default{
    name: 'Projects', data() {
        return {
            profile, portfolio, map
        }
    }
};
</script>