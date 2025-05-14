import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogConfig,
} from '@angular/material/dialog';
import { provideRouter, TitleStrategy } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { routes } from './routes';
import { MinTitleStrategy } from './shared/core/title/title-strategy';

export const config: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideTranslateService({
      defaultLanguage: 'en',
    }),
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        exitAnimationDuration: 0,
        enterAnimationDuration: 0,
        backdropClass: 'min-dialog-backdrop',
        panelClass: 'min-dialog',
        autoFocus: true,
      } as MatDialogConfig,
    },
    {
      provide: TitleStrategy,
      useClass: MinTitleStrategy,
    },
  ],
};
