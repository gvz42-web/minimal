import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainMenu } from '@feautres/main-menu/ui/main-menu/main-menu';

@Component({
  selector: 'min-main',
  templateUrl: './main.html',
  imports: [MainMenu],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Main {}
