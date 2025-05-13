import { Directive, inject } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: 'button[back-button]',
  standalone: true,
  host: {
    '(click)': 'location.back()',
  },
})
export class BackButton {
  protected location = inject(Location);
}
