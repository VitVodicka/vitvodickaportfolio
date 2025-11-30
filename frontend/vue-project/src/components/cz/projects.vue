<template>
  <v-container>
    <h2>Projekty</h2>
    <v-row>
      <v-col cols="4">
        <v-card color="background" class="hobbiesCards" >
          <v-img :src="planner" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">FinancialPortal</v-card-title>
          <v-card-text>
            <p class="paragraph">Desktopová WPF aplikace pro správu osobních financí. Umožňuje evidovat příjmy a výdaje, zobrazovat je v přehledných grafech a obsahuje dva kalkulátory hypoteční a investiční. Data ukládá do databáze hostované v Azure.</p>
          

            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <v-chip style="flex" class="v-chip">C# .NET</v-chip>
              <v-chip style="flex" class="v-chip">Azure</v-chip>
              <v-chip style="flex" class="v-chip">WPF</v-chip>

            </div>
            <h4 href="https://github.com/VitVodicka/FinancialPortal" >Zdrojový kod</h4>
            
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="background" class="hobbiesCards" >
          <v-img :src="blog" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">Blog</v-card-title>
          <v-card-text>
            <p class="paragraph">ASP.NET webová aplikace ve stylu blogu, která umožňuje přidávat a hodnotit články. Projekt jsem použil k procvičení MVC architektury, Razor view, práce s daty a frontendu (HTML, CSS, JavaScript, ASP.NET).</p>
          

            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <v-chip style="flex" class="v-chip">ASP.NET</v-chip>
              <v-chip style="flex" class="v-chip">Razor pages</v-chip>
              <v-chip style="flex" class="v-chip">JavaScript</v-chip>
            </div>
            <h4 href="https://github.com/VitVodicka/Blog" >Zdrojový kod</h4>
            
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="background" class="hobbiesCards" >
          <v-img :src="portfolio" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">Portfolio web</v-card-title>
          <v-card-text>
            <p class="paragraph">Osobní portfolio web pro prezentaci projektů, dovedností a zkušeností. Postavený na Vue 3 a Vuetify psaný typescriptem s důrazem na čistý design, responzivní layout a jednoduchou správu obsahu.</p>
          

            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <v-chip style="flex" class="v-chip">Vue</v-chip>
              <v-chip style="flex" class="v-chip">Typescript</v-chip>

            </div>
            <h4 href="https://github.com/VitVodicka/vitvodickaportfolio" >Zdrojový kod</h4>
            
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
h2{
  margin-bottom: 20px;
  margin-top: 50px;
}
</style>
<script >
import  profile  from '@/assets/profile.jpg';
import planner from '@/assets/projects/planner.png'
import portfolio from '@/assets/projects/portfolio.png'
import blog from '@/assets/projects/blog.png'

export default{
    name: 'Projects', data() {
        return {
            profile, planner, portfolio, blog
        }
    }
};
</script>