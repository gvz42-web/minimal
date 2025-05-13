import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Description {
  private description = signal('');
}
