import { Directive, output } from '@angular/core';

@Directive({
  selector: '[minItemSelected]',
  host: {
    '(mouseenter)': 'selected.emit($event)',
    '(mouseleave)': 'deselected.emit($event)',
    '(focus)': 'selected.emit($event)',
    '(blur)': 'deselected.emit($event)',
  },
})
export class ItemSelected {
  selected = output();
  deselected = output();
}
