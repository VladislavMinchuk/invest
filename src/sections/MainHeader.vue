<script>
  import { ref, computed } from 'vue';
  import Menubar from 'primevue/menubar';
  import Logo from '@/components/TheLogo.vue';
  import { useI18n } from 'vue-i18n';
  
  export default {
    components: {
      Menubar,
      Logo,
    },
    setup() {
      const { t } = useI18n() ;
      
      const items = ref([
        {
          label: t('nav.home'),
          icon: 'pi pi-fw pi-home customer-badge',
          to: '/',
        },
        {
          label: t('nav.projects'),
          icon: 'pi pi-fw pi-bitcoin',
          items: [
            {
              label: 'ESOM',
              to: '/esom',
            },
          ],
        },
        {
          label: t('nav.profitCalculation'),
          icon: 'pi pi-fw pi-calculator',
          items: [
            {
              label: 'ESOM',
              to: '/calculation/esom',
            },
            // {
            //   label: 'Neuman Wallet',
            //   to: '/calculation/neuman',
            // },
          ],
        },
      ]);
      
      return { items };
    },
  };
</script>
<template>
  <header class="bottom-gradient-line">
    <div class="container">
      <div class="grid">
        <div class="col-12">
          <Menubar :model="items" class="justify-content-between">
            <template #start>
              <Logo />
            </template>
          </Menubar>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .p-menubar {
    padding: 1rem;
    background-color: transparent;
  }
</style>
