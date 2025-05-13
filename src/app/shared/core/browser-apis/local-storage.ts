import { inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from './browser-apis/tokens';

@Injectable()
export class LocalStorage {
  private defaultView = inject(LOCAL_STORAGE);
}
