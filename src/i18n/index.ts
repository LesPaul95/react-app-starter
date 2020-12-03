import i18next from 'i18next';
import Backend from './i18next-webpack-backend';

i18next.use(Backend as any).init({
  lng: 'ru',
  fallbackLng: 'ru',

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: process.env.NODE_ENV === 'development',

  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18next;
