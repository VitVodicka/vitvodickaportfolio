<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/languageStore'

import Introduction from '@/components/cz/introduction.vue';
import Skills from '@/components/cz/skills.vue';
import About from '@/components/cz/about.vue';
import Whattobring from '@/components/cz/whattobring.vue';
import Projects from '@/components/cz/projects.vue';

import AboutEN from '@/components/en/aboutEN.vue';
import IntroductionEN from '@/components/en/introductionEN.vue';
import SkillsEN from '@/components/en/skillsEN.vue';
import ProjectsEN from '@/components/en/projectsEN.vue';
import WhattobringEN from '@/components/en/whattobringEN.vue';

const languageStore = useLanguageStore()
const toggleLang = ref(languageStore.language)
</script>

<template>
  <div v-if="languageStore.language === 'cz'">
  <introduction />
  <About></About>
  <Skills />
  <Projects/>
  <Whattobring/>
  </div>


  <div v-else>
  <IntroductionEN></IntroductionEN>
  <AboutEN></AboutEN>
  <SkillsEN></SkillsEN>
  <ProjectsEN/>
  <WhattobringEN/>
  </div>

 
</template>

<style>
</style>