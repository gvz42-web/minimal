import { DOCUMENT } from '@angular/common';
import {
  computed,
  effect,
  inject,
  Injectable,
  RendererFactory2,
  signal,
} from '@angular/core';
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
  private renderer = inject(RendererFactory2).createRenderer(null, null);

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
      this.renderer.setAttribute(
        this.document.documentElement,
        'lang',
        currentLanguage
      );
    });

    effect(() => {
      if (this.isRtl()) {
        this.renderer.setAttribute(this.document.documentElement, 'dir', 'rtl');
      } else {
        this.renderer.setAttribute(this.document.documentElement, 'dir', 'ltr');
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
