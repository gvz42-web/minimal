import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorage } from '../browser-apis/local-storage';
import {
  defaultLanguage,
  Language,
  languages,
  rtlLanguages,
  translationFiles,
} from './languages';

@Injectable({ providedIn: 'root' })
export class Translate {
  private translateService = inject(TranslateService);
  private localStorage = inject(LocalStorage);
  private document = inject(DOCUMENT);

  private fromLocalStorage = this.localStorage.get('lang') || defaultLanguage;

  private language = signal<Language>(this.fromLocalStorage);
  currentLanguage = this.language.asReadonly();

  isRtl = computed(() => rtlLanguages.includes(this.currentLanguage()));

  constructor() {
    this.translateService.addLangs(languages);
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(this.fromLocalStorage);

    for (let lang of languages) {
      this.translateService.setTranslation(lang, translationFiles[lang]);
    }

    effect(() => {
      const currentLanguage = this.currentLanguage();
      this.translateService.use(currentLanguage);
      this.localStorage.set('lang', currentLanguage);
    });

    effect(() => {
      console.log(this.isRtl());
      if (this.isRtl()) {
        this.document.dir = 'rtl';
      } else {
        this.document.dir = 'ltr';
      }
    });
  }

  setLanguage(lang: Language) {
    this.language.set(lang);
  }
}

export const setupTranslation = () => {
  const translate = inject(Translate);
};
