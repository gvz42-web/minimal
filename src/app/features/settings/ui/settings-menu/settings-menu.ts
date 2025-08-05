import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { TranslatePipe } from '@ngx-translate/core';
import { useDescription } from 'app/shared/core/description/description';
import { languages } from 'app/shared/core/i18n/languages';
import { Translate } from 'app/shared/core/i18n/translate';
import { ThemeService } from 'app/shared/core/theme/theme-service';
import { themes } from 'app/shared/core/theme/themes';
import { ItemSelected } from 'app/shared/ui/item-selected/item-selected';
import { useOpenSelectionDialog } from 'app/shared/ui/selection-dialog/use-open-selection-dialog';
import { pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'min-settings-menu',
  imports: [TranslatePipe, CdkMenu, CdkMenuItem, ItemSelected],
  templateUrl: './settings-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsMenu {
  private translate = inject(Translate);
  private themeService = inject(ThemeService);
  private router = inject(Router);

  protected currentItem = signal<string | null>(null);

  protected items = [
    {
      label: 'language',
      action: () => this.openLanguageChooser(),
    },
    {
      label: 'theme',
      action: () => this.openThemeChooser(),
    },
    {
      label: 'back',
      action: () => this.router.navigate(['..']),
    },
  ];

  constructor() {
    useDescription(
      computed(() => {
        const key = this.currentItem();
        if (key) {
          return 'settings.' + key + '.description';
        }
        return 'mainMenu.settings.description';
      })
    );
  }

  private openSelectionDialog = useOpenSelectionDialog();

  openLanguageChooser = rxMethod<void>(
    pipe(
      switchMap(() =>
        this.openSelectionDialog({
          selectedOption: this.translate.currentLanguage(),
          options: languages.map(value => ({
            value,
            label: 'languages.' + value,
          })),
          title: 'settings.language.label',
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

  openThemeChooser = rxMethod<void>(
    pipe(
      switchMap(() =>
        this.openSelectionDialog({
          selectedOption: this.themeService.currentTheme(),
          options: themes.map(value => ({
            value,
            label: 'themes.' + value,
          })),
          title: 'settings.theme.label',
        }).pipe(
          tap(theme => {
            if (theme) {
              this.themeService.setTheme(theme);
            }
          })
        )
      )
    )
  );
}
