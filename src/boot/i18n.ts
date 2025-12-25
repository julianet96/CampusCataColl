import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import messages from 'src/i18n';

const languages = Object.keys(messages);

const storedLocale = localStorage.getItem('language');
const language = (storedLocale && languages.includes(storedLocale)) ? storedLocale : 'en';

export const i18n = createI18n({
  locale: language,
  messages,
  globalInjection: true,
  legacy: false,
  fallbackLocale: 'es'
});

export default boot(({ app }) => {
  app.use(i18n);
});
