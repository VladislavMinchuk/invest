<script setup>
  import Logo from '@/components/TheLogo.vue';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="bottom-gradient-line pt-4 pb-4">
    <div class="container">
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-4">
          <Logo class="mb-3" />
          Copyright<span>&#169;</span>2023. Your Invest
        </div>
        <div class="col-12 md:col-6 lg:col-4">
          <h4 class="mb-3">Main pages</h4>
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="col-12 md:col-6 lg:col-4">
          <h4 class="mb-3">Profit calculation</h4>
          <RouterLink to="/calculation">ESOM</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    &.bottom-gradient-line {
      &:after {
        bottom: auto;
        top: 0;
      }
    }
  }
</style>
