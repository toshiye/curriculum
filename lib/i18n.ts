import en from '../locales/en.json';
import pt from '../locales/pt.json';

export type SupportedLang = 'en' | 'pt';

const translations = { en, pt };

export function getTranslation(lang: SupportedLang) {
  return translations[lang] || translations['en'];
}

export function getBrowserLanguage(): SupportedLang {
  if (typeof window === 'undefined') return 'en';
  const browserLang = navigator.language.split('-')[0];
  /* return (browserLang === 'pt') ? 'pt' : 'en'; */
  return 'en';
}