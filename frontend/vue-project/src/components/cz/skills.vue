<template>

<v-container class="pa-4">
    <h2>Dovednosti</h2>
    <v-row >

<v-col>
<v-card color="background" class="hobbiesCards" >
    <v-card-title>Frontend</v-card-title>
    <v-card-text>
        <div class="v-chipGroup">
            <v-chip style="flex" class="v-chip">Vue.js</v-chip>
            <v-chip style="flex" class="v-chip">HTML</v-chip>
            <v-chip style="flex" class="v-chip">CSS</v-chip>
            <v-chip style="flex" class="v-chip">Typescript</v-chip>
            <v-chip style="flex" class="v-chip">Elementor</v-chip>
            <v-chip style="flex" class="v-chip">Wordpress</v-chip>
        </div>
    </v-card-text>
</v-card>
</v-col>

<v-col>
<v-card color="background" class="hobbiesCards" >
    <v-card-title>Backend</v-card-title>
    <v-card-text>
        <div class="v-chipGroup">
            <v-chip style="flex" class="v-chip">C# .NET</v-chip>
            <v-chip style="flex" class="v-chip">ASP.NET</v-chip>
            <v-chip style="flex" class="v-chip">Python</v-chip>
            <v-chip style="flex" class="v-chip">WPF/ Winforms</v-chip>     
            <v-chip style="flex" class="v-chip">Entity Framework</v-chip>

        </div>
    </v-card-text>
</v-card>
</v-col>

<v-col>
<v-card color="background" class="hobbiesCards" >
    <v-card-title>Databáze a DevOps</v-card-title>
    <v-card-text>
        <div class="v-chipGroup">
            <v-chip style="flex" class="v-chip">PostgreSQL</v-chip>
            <v-chip style="flex" class="v-chip">MSSQL</v-chip>
            <v-chip style="flex" class="v-chip">Docker</v-chip>
            <v-chip style="flex" class="v-chip">Linux</v-chip>
            <v-chip style="flex" class="v-chip">WebSockets</v-chip>
            <v-chip style="flex" class="v-chip">Microservices</v-chip>
        </div>
    </v-card-text>
</v-card>
</v-col>

<v-col>
<v-card color="background" class="hobbiesCards" >
    <v-card-title>Ostatní</v-card-title>
    <v-card-text>
        <div class="v-chipGroup">
            <v-chip style="flex" class="v-chip">Angličtina</v-chip>
            <v-chip style="flex" class="v-chip">Němčina</v-chip>
            <v-chip style="flex" class="v-chip">HW</v-chip>
            <v-chip style="flex" class="v-chip">Základy sítí</v-chip>
            <v-chip style="flex" class="v-chip">API testování</v-chip>
            <v-chip style="flex" class="v-chip">Kotlin/Swift</v-chip>
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
    height: 100%;

}
.v-chipGroup {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}
.v-chip{
    display: flex;
    color: #137fec;
    background-color: #101922;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
}
</style>
<script>
export default {
  name: 'Skills',
};
</script>