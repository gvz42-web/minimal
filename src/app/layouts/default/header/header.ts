import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthStore } from '../../../features/auth/core/auth-store';

@Component({
  selector: 'min-header',
  imports: [TranslatePipe],
  host: {
    class: 'px-8 py-2 border-b-4 flex justify-between items-center',
  },
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private authStore = inject(AuthStore);

  protected name = computed(() => {
    const user = this.authStore.user();

    if (user) {
      return `${user.firstName} ${user.lastName}`;
    }
    return '';
  });
}
