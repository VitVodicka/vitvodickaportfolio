<template>

    <v-container class="pa-4" id="whattobring">
    <h2>Co mohu přinést?</h2>
    <v-row>



<v-col cols="3">
<v-card color="background" class="hirringCards" >
    <v-img
            :src="briefcase"
            width="40"
            height="40"
            
            ma-2
          />
    <v-card-title>2+ roky praxe, zahraničí</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Mám přes dva roky praxe v C#/.NET, webovém vývoji a práci s API. Zkušenosti z mezinárodních týmů mě naučily samostatnosti, spolehlivé komunikaci a rychlé orientaci v nových projektech. Díky tomu dokážu od začátku přinášet hodnotu v ČR i v zahraničí.</p>
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
    <v-card-title>Rychlé učení a adaptace</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Rychle se učím nové technologie i postupy. Pracoval jsem s různými stacky od C#/backendu přes frontend až po práci s daty a optimalizacemi. Díky tomu se umím snadno přizpůsobit potřebám projektu a stát se užitečným už během prvních týdnů.</p>
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
    <v-card-title>Proaktivní přístup</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Aktivně hledám způsoby, jak zlepšit produkt, technické řešení. Přináším vlastní nápady, automatizace a optimalizace, které zvyšují efektivitu práce a snižují zbytečnou zátěž týmu. Dokážu převzít iniciativu, navrhnout praktická vylepšení.</p>
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
    <v-card-title>Technické myšlení</v-card-title>
    
    <v-card-text>
        <p class="hiringText">Dokážu zapojit technické myšlení při řešení složitějších úkolů. Přemýšlím nad strukturou kódu, výkonem i udržitelností, umím pracovat s API, daty a logikou aplikací. Díky tomu dokážu odhalit problémy včas a přinést stabilní řešení.</p>
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
    name: 'WhatToBring',data() {
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