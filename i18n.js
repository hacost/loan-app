import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import CommonEs from './src/assets/locales/es/Translation.json';
import CommonEn from './src/assets/locales/en/Translation.json';

i18n.use(LanguageDetector).init({
  fallbackLng: 'es',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: CommonEs,
    },
    en: {
      translation: CommonEn,
    },
  },
});

export default i18n;
