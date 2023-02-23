<script>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  import Menubar from 'primevue/menubar';
  import { storeToRefs } from "pinia";
  import Logo from '@/components/TheLogo.vue';
  import Dropdown from 'primevue/dropdown';
  import { useLangStore } from '@/stores/lang';
  import uaFlag from '@/assets/images/ua-flag.svg';
  import gbFlag from '@/assets/images/gb-flag.svg';
  
  export default {
    components: {
      Menubar,
      Logo,
      Dropdown,
    },
    setup() {
      const { setLang, langsArr, currentLang } = useLangStore();

      const { t } = useI18n();
      
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
      
      const availableLocales = [
        { text: 'EN', value: langsArr[0], img: gbFlag },
        { text: 'UA', value: langsArr[1], img: uaFlag }
      ];
      
      const selectedLang = ref(availableLocales.find(i => i.value === currentLang.value));
      
      return { items, availableLocales, selectedLang, setLang };
    },
    methods: {
      updateLang(event) {
        const { value } = event;
        this.setLang(value);
        this.selectedLang = this.availableLocales.find(i => i.value === value);
      }
    }
  };
</script>
<template>
  <header class="bottom-gradient-line">
    <div class="container">
      <div class="grid">
        <div class="col-12">
          <Menubar :model="items" class="main-menubar">
            <template #start>
              <Logo />
            </template>
            <template #end>
              <Dropdown
                @change="updateLang"
                :modelValue="selectedLang"
                :options="availableLocales"
                optionLabel="text"
                optionValue="value"
                placeholder="Select a lang"
                dropdownIcon="pi pi-globe"
              >
                <template #value="slotProps">
                  <div class="country-item">
                    <span>{{slotProps.value.text}}</span>
                    <img :src="slotProps.value.img" />
                  </div>
                </template>
                <template #option="slotProps">
                  <div class="country-item">
                    <span>{{slotProps.option.text}}</span>
                    <img :src="slotProps.option.img" />
                  </div>
                </template>
              </Dropdown>
            </template>
          </Menubar>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  .main-menubar {
    &.p-menubar {
      padding: 1rem 0;
      background-color: transparent;
      flex-wrap: wrap;
      
      @media screen and (min-width: 960px) {
        flex-wrap: nowrap;
      }
    }
    .p-menubar-root-list {
      margin-left: auto;
      
      @media screen and (min-width: 960px) {
        flex-wrap: nowrap;
        order: 2;
      }
    }
    
    .p-menubar-start {
      margin-right: auto;
      order: 1;

    }
    
    .p-menubar-button {
      order: 3;
      margin-left: 10px;
    }
    
    .p-menubar-end {
      order: 2;
      // width: 100%;
      margin-left: auto;
      text-align: right;

      @media screen and (min-width: 960px) {
        margin-left: 0;
        width: auto;
        order: 4;
      }
    }
    
    .p-dropdown {
      border: none;
    }
  }
  
  .country-item {
    display: flex;
    align-items: center;
    min-width: 34px;
    
    img {
      max-width: 20px;
      margin-left: 2px;
    }
  }
</style>
