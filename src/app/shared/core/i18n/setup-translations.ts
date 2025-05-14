import { inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defaultLanguage, languages } from './languages';

export const setupTranslations = () => {
  const translateService = inject(TranslateService);

  translateService.addLangs(languages);
  translateService.setDefaultLang(defaultLanguage);
  translateService.use(defaultLanguage);
};
