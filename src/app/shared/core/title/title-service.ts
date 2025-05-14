import { effect, inject, Injectable, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Translate } from '../i18n/translate';

const defaultTitle = 'appName';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private title = inject(Title);
  private translateService = inject(TranslateService);
  private translate = inject(Translate);

  private currentTitle = signal<string>(defaultTitle);

  constructor() {
    effect(() => {
      this.translate.currentLanguage();
      this.title.setTitle(this.translateService.instant(this.currentTitle()));
    });
  }

  setTitle(title?: string) {
    console.log('setTitle', title);
    this.currentTitle.set(title || defaultTitle);
  }
}
