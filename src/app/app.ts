import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { setupTranslation } from './shared/core/i18n/translate';
import { setupTheme } from './shared/core/theme/theme-service';

@Component({
  selector: 'min-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  constructor() {
    setupTranslation();
    setupTheme();
  }
}
