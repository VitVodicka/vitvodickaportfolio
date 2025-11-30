<template>
  <v-container>
    <h2>Projects</h2>
    <v-row>
      <v-col cols="4">
        <v-card color="background" class="hobbiesCards" >
          <v-img :src="planner" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">FinancialPortal</v-card-title>
          <v-card-text>
            <p class="paragraph">Desktop WPF application for personal finance management. It allows you to record income and expenses, display them in graphs, and includes two calculators for mortgages and investments. Data is stored in a database hosted in Azure.</p>
          

            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <v-chip style="flex" class="v-chip">C# .NET</v-chip>
              <v-chip style="flex" class="v-chip">Azure</v-chip>
              <v-chip style="flex" class="v-chip">WPF</v-chip>

            </div>
            <h4 href="https://github.com/VitVodicka/FinancialPortal" >Source code</h4>
            
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="background" class="hobbiesCards" >
          <v-img :src="blog" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">Blog</v-card-title>
          <v-card-text>
            <p class="paragraph">An ASP.NET web application in the style of a blog that allows users to add and rate articles. I used this project to practice MVC architecture, Razor view, working with data, and frontend (HTML, CSS, JavaScript, ASP.NET).</p>
          

            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <v-chip style="flex" class="v-chip">ASP.NET</v-chip>
              <v-chip style="flex" class="v-chip">Razor pages</v-chip>
              <v-chip style="flex" class="v-chip">JavaScript</v-chip>
            </div>
            <h4 href="https://github.com/VitVodicka/Blog" >Source code</h4>
            
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="background" class="hobbiesCards" >
          <v-img :src="portfolioEN" height="170" cover="full"   ></v-img>
          <v-card-title class="cardTitle">Portfolio web</v-card-title>
          <v-card-text>
            <p class="paragraph">Personal portfolio website for presenting projects, skills, and experience. Built on Vue 3 and Vuetify, written in TypeScript with an emphasis on clean design, responsive layout, and easy content management.</p>
          

            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              <v-chip style="flex" class="v-chip">Vue</v-chip>
              <v-chip style="flex" class="v-chip">Typescript</v-chip>

            </div>
            <h4 href="https://github.com/VitVodicka/vitvodickaportfolio" >Source code</h4>
            
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
import portfolioEN from '@/assets/projects/portfolioEN.png'
import blog from '@/assets/projects/blog.png'

export default{
    name: 'ProjectsEN', data() {
        return {
            profile, planner, portfolioEN, blog
        }
    }
};
</script>