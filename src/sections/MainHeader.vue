<script>
  import { ref } from 'vue';
  import Menubar from 'primevue/menubar';
  import Logo from '@/components/TheLogo.vue';

  export default {
    components: {
      Menubar,
      Logo,
    },
    setup() {
      const items = ref([
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home customer-badge',
          to: '/',
        },
        {
          label: 'Projects',
          icon: 'pi pi-fw pi-bitcoin',
          items: [
            {
              label: 'ESOM',
              to: '/esom',
            },
          ],
        },
        {
          label: 'Profit calculation',
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
