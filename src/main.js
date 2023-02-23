import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import VueEasyLightbox from 'vue-easy-lightbox';

import App from './App.vue';
import router from './router';

import 'primevue/resources/themes/bootstrap4-light-purple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './assets/main.scss';
import i18n from '@/i18n';

const app = createApp(App);
app.use(createPinia());
app.use(VueEasyLightbox);
app.use(router);
app.use(i18n);
app.use(PrimeVue);
app.mount('#app');
