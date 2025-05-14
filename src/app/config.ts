import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogConfig,
} from '@angular/material/dialog';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';
import { routes } from './routes';

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
        backdropClass: 'trm-dialog-backdrop',
        panelClass: 'trm-dialog',
        autoFocus: true,
      } as MatDialogConfig,
    },
  ],
};
