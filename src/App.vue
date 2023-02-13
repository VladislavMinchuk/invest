<script setup>
  import { RouterView } from 'vue-router';
  import Header from './sections/MainHeader.vue';
  import Footer from './sections/MainFooter.vue';
</script>

<template>
  <div class="p-component">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
