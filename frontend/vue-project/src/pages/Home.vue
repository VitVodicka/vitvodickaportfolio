<script setup>
//import '@/assets/global.css'
import Introduction from '@/components/introduction.vue';
import HeaderVue from '@/layouts/headerVue.vue'
import Hobbies from '@/components/hobbies.vue';
import About from '@/components/about.vue';
</script>

<template>
    <introduction />
    <About></About>
  <Hobbies />
  <div class="home">
    <h1>Welcome to the Home Page</h1>
  </div>
</template>

<style>
</style>