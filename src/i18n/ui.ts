import enData from '@locale/en/en_data.json';
import esData from '@locale/es/es_data.json';

export const showDefaultLang = false;

export const languages = {
    en: 'English',
    es: 'Español',
  };
  
  export const defaultLang = 'en';
  
  export const ui = {
    en: enData,
    es: esData,
  } as const;