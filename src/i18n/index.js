import { createI18n } from 'vue-i18n';
import messages from './messages';
import { langs } from '@/config';

export default createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: localStorage.getItem('lang') || langs[0], // set locale
  fallbackLocale: langs[1], // set fallback locale
  messages
});
