import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import i18n from '@/i18n';


export const useLangStore = defineStore('counter', () => {
  const langStore = ref(i18n.global.locale.value);
  
  const langsArr = ref(i18n.global.availableLocales);
  
  const currentLang = computed(() => langStore);

  function setLang(lang) {
    if (langsArr.value.indexOf(lang) === -1 || lang === currentLang) return;
    
    localStorage.setItem('lang', lang); // Set to LocalStorage
    langStore.value = lang; // Set to store
    i18n.global.locale.value = lang;
  }

  return { currentLang, langStore, langsArr, setLang };
})
