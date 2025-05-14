import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SettingsMenu } from '../../features/settings/ui/settings-menu/settings-menu';

@Component({
  selector: 'trm-settings',
  imports: [SettingsMenu],
  templateUrl: './settings.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Settings {}
