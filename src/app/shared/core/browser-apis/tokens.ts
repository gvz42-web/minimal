import { inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const WINDOW = new InjectionToken<Window | undefined>('WINDOW', {
  factory: () => {
    const defaultView = inject(DOCUMENT).defaultView;
    return defaultView || undefined;
  },
});

export const LOCAL_STORAGE = new InjectionToken<Storage | undefined>(
  'LOCAL_STORAGE',
  {
    factory: () => {
      return inject(WINDOW)?.localStorage;
    },
  }
);
