import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainMenu } from '@feautres/main-menu/ui/main-menu/main-menu';

@Component({
  selector: 'trm-main',
  templateUrl: './main.html',
  imports: [MainMenu],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {}
