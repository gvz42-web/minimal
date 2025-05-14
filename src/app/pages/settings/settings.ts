import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsMenu } from '../../features/settings/ui/settings-menu/settings-menu';

@Component({
  selector: 'min-settings',
  imports: [SettingsMenu],
  templateUrl: './settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Settings {}
