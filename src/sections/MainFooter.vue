<script setup>
  import Logo from '@/components/TheLogo.vue';
  import { RouterLink } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
</script>

<template>
  <footer class="bottom-gradient-line pt-4 pb-4">
    <div class="container">
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
          <Logo class="mb-3" />
          <p class="mb-3">Copyright<span>&#169;</span>2023. Your Invest</p>
          <p>{{ t('contactUs') }}:</p>
          <a href="mailto:your.invest.anderson@gmail.com"
            >your.invest.anderson@gmail.com</a
          >
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <h4 class="mb-3">{{ t('mainPages') }}</h4>
          <RouterLink to="/">{{ t('nav.home') }}</RouterLink>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <h4 class="mb-3">
            {{ t('nav.projects') }}
            <span class="text-xs">({{ t('moreProject') }})</span>
          </h4>
          <RouterLink to="/esom">ESOM</RouterLink>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
          <h4 class="mb-3">{{ t('nav.profitCalculation') }}</h4>
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
