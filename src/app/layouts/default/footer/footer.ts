import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Description } from 'app/shared/core/description/description';

@Component({
  selector: 'trm-footer',
  templateUrl: './footer.html',
  imports: [TranslatePipe],
  host: {
    class: 'px-8 py-3 block border-t-4',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected description = inject(Description).currentDescription;
}
