import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { useDescription } from 'app/shared/core/description/description';
import { ItemSelected } from 'app/shared/ui/item-selected/item-selected';
import { MenuItem, useMenuItems } from './menu-items';

@Component({
  selector: 'trm-main-menu',
  imports: [CdkMenu, RouterLink, CdkMenuItem, TranslatePipe, ItemSelected],
  templateUrl: './main-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenu {
  items = useMenuItems();

  currentItem = signal<MenuItem | null>(null);

  constructor() {
    useDescription(
      computed(() => {
        const key = this.currentItem()?.label;
        if (key) {
          return key + '.description';
        }
        return null;
      })
    );
  }
}
