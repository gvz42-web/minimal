import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { defaultTheme, Theme } from './themes';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);

  private theme = signal<Theme>(defaultTheme);
  currentTheme = this.theme.asReadonly();

  private themeEffect = effect(() => {
    this.document.documentElement.className = 'theme-' + this.theme();
  });

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }
}
