<script setup>
//import '@/assets/global.css'
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
</script>

<template>
    <introduction />
    <About></About>
  <Skills />
  <Projects/>
  <Whattobring/>
  
  <IntroductionEN></IntroductionEN>
  <AboutEN></AboutEN>
  <SkillsEN></SkillsEN>
  <ProjectsEN/>
  <WhattobringEN/>

</template>

<style>
</style>