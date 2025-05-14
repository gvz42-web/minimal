import { DOCUMENT } from '@angular/common';
import {
  effect,
  inject,
  Injectable,
  RendererFactory2,
  signal,
} from '@angular/core';
import { LocalStorage } from '../browser-apis/local-storage';
import { defaultTheme, Theme, themes } from './themes';

const themeClasses = themes.map(theme => 'theme-' + theme);

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  private localStorage = inject(LocalStorage);
  private renderer = inject(RendererFactory2).createRenderer(null, null);

  private theme = signal<Theme>(this.localStorage.get('theme') || defaultTheme);
  currentTheme = this.theme.asReadonly();

  private themeEffect = effect(() => {
    this.localStorage.set('theme', this.currentTheme());

    for (const themeClass of themeClasses) {
      this.renderer.removeClass(this.document.documentElement, themeClass);
    }
    this.renderer.addClass(
      this.document.documentElement,
      'theme-' + this.currentTheme()
    );
  });

  setTheme(theme: Theme) {
    this.theme.set(theme);
  }
}
