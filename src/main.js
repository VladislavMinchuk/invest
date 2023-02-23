import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import VueEasyLightbox from 'vue-easy-lightbox';
import { createI18n } from 'vue-i18n';

import App from './App.vue';
import router from './router';

import 'primevue/resources/themes/bootstrap4-light-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './assets/main.scss';
import locales from './locales';

const app = createApp(App);
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'en', // set locale
  fallbackLocale: 'ukr', // set fallback locale
  messages: locales
});
app.use(createPinia());
app.use(VueEasyLightbox);
app.use(router);
app.use(i18n);
app.use(PrimeVue);
app.mount('#app');
