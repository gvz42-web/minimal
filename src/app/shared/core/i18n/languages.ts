import translationCN from '../../../../assets/i18n/cn.json';
import translationEN from '../../../../assets/i18n/en.json';
import translationHE from '../../../../assets/i18n/he.json';
import translationJA from '../../../../assets/i18n/ja.json';
import translationNO from '../../../../assets/i18n/no.json';
import translationRU from '../../../../assets/i18n/ru.json';

export type Language = 'en' | 'ru' | 'cn' | 'ja' | 'no' | 'he';
export const languages: Language[] = ['en', 'ru', 'cn', 'ja', 'no', 'he'];
export const defaultLanguage: Language = 'en';

export const rtlLanguages = ['he'];

export const translationFiles: Record<Language, any> = {
  en: translationEN,
  ru: translationRU,
  cn: translationCN,
  ja: translationJA,
  he: translationHE,
  no: translationNO,
};
