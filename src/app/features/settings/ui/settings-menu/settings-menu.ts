import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { languages } from 'app/shared/core/i18n/languages';
import { Translate } from 'app/shared/core/i18n/translate';
import { BackButton } from 'app/shared/ui/back-button/back-button';
import { useOpenSelectionDialog } from 'app/shared/ui/selection-dialog/use-open-selection-dialog';
import { pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'trm-settings-menu',
  imports: [BackButton, TranslatePipe, CdkMenu, CdkMenuItem],
  templateUrl: './settings-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsMenu {
  private translate = inject(Translate);

  openSelectionDialog = useOpenSelectionDialog();

  openLanguageChooser = rxMethod<void>(
    pipe(
      switchMap(() =>
        this.openSelectionDialog({
          selectedOption: this.translate.currentLanguage(),
          options: languages.map(value => ({
            value,
            label: 'languages.' + value,
          })),
          title: 'settings.language',
        }).pipe(
          tap(lang => {
            if (lang) {
              this.translate.setLanguage(lang);
            }
          })
        )
      )
    )
  );
}
