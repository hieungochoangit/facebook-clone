import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import vi from './vi';

export const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  }
};

export default i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export { i18n };
