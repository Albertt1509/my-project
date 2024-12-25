<script setup>
import { useRoute } from 'vue-router'
import Navbar from './MainNavbar.vue'
import Footer from './MainFooter.vue'
const route = useRoute();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar v-if="!route.meta.hideNavbarAndFooter" />
    <main class="flex-grow bg-gray-100 p-4">
      <router-view />
    </main>
    <Footer v-if="!route.meta.hideNavbarAndFooter" />
  </div>
</template>


<style scoped></style>
