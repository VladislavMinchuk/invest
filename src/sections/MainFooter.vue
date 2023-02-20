<script setup>
  import Logo from '@/components/TheLogo.vue';
  import { RouterLink } from 'vue-router';
</script>

<template>
  <footer class="bottom-gradient-line pt-4 pb-4">
    <div class="container">
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
          <Logo class="mb-3" />
          <p class="mb-3">Copyright<span>&#169;</span>2023. Your Invest</p>
          <p>Contact us:</p>
          <a href="mailto:your.invest.anderson@gmail.com"
            >your.invest.anderson@gmail.com</a
          >
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <h4 class="mb-3">Main pages</h4>
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <h4 class="mb-3">
            Projects
            <span class="text-xs">(More projects coming soon ...)</span>
          </h4>
          <RouterLink to="/esom">ESOM</RouterLink>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <h4 class="mb-3">Profit calculation</h4>
          <RouterLink to="/calculation/esom">ESOM</RouterLink>
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
