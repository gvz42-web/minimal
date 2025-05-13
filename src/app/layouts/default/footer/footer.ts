import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'trm-footer',
  templateUrl: './footer.html',
  host: {
    class: 'px-8 py-3 block border-t-4',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {}
