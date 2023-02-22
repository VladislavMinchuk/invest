<script>
  import { ref, computed } from 'vue';
  import Menubar from 'primevue/menubar';
  import Logo from '@/components/TheLogo.vue';
  import locales from '@/locales';

  export default {
    components: {
      Menubar,
      Logo,
    },
    setup() {
      const items = ref([
        {
          label: locales.ukr.nav.home,
          icon: 'pi pi-fw pi-home customer-badge',
          to: '/',
        },
        {
          label: locales.ukr.nav.projects,
          icon: 'pi pi-fw pi-bitcoin',
          items: [
            {
              label: 'ESOM',
              to: '/esom',
            },
          ],
        },
        {
          label: locales.ukr.nav.profitCalculation,
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
