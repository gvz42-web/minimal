import { Language } from '../i18n/languages';
import { Theme } from '../theme/themes';

export type LocalStorageSchema = {
  token: string;
  lang: Language;
  theme: Theme;
};
