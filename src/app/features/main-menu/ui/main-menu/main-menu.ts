import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { RouterLink } from '@angular/router';
import { useMenuItems } from './menu-items';

@Component({
  selector: 'trm-main-menu',
  imports: [CdkMenu, RouterLink, CdkMenuItem],
  templateUrl: './main-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenu {
  items = useMenuItems();
}
