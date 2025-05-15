export type Language = 'en' | 'ru' | 'cn' | 'ja' | 'no' | 'he' | 'pl' | 'es';
export const languages: Language[] = [
  'en',
  'ru',
  'cn',
  'ja',
  'no',
  'he',
  'pl',
  'es',
];
export const defaultLanguage: Language = 'en';

export const rtlLanguages = ['he'];

export const translationFiles: Record<Language, () => Promise<any>> = {
  en: () => import('../../../../assets/i18n/en.json'),
  ru: () => import('../../../../assets/i18n/ru.json'),
  cn: () => import('../../../../assets/i18n/cn.json'),
  ja: () => import('../../../../assets/i18n/ja.json'),
  he: () => import('../../../../assets/i18n/he.json'),
  no: () => import('../../../../assets/i18n/no.json'),
  pl: () => import('../../../../assets/i18n/pl.json'),
  es: () => import('../../../../assets/i18n/es.json'),
};
