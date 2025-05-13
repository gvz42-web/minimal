import { inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE } from './tokens';
import { LocalStorageSchema } from './local-storage-schema';

@Injectable({ providedIn: 'root' })
export class LocalStorage {
  private localStorage = inject(LOCAL_STORAGE);

  set<T extends keyof LocalStorageSchema>(
    key: T,
    value: LocalStorageSchema[T]
  ) {
    this.localStorage?.setItem(key, JSON.stringify(value));
  }

  get<T extends keyof LocalStorageSchema>(
    key: T
  ): LocalStorageSchema[T] | null {
    const value = this.localStorage?.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  delete<T extends keyof LocalStorageSchema>(key: T) {
    this.localStorage?.removeItem(key);
  }
}
