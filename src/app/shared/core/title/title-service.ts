import { effect, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs';
import { Translate } from '../i18n/translate';

const defaultTitle = 'appName';

@Injectable({ providedIn: 'root' })
export class TitleService {
  private title = inject(Title);
  private translateService = inject(TranslateService);
  private translate = inject(Translate);
  private router = inject(Router);

  private currentTitle = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute = this.router.routerState.root;
        let routeTitle = defaultTitle;
        while (route!.firstChild) {
          route = route.firstChild;
        }
        if (route.snapshot.data['title']) {
          routeTitle = route!.snapshot.data['title'];
        }
        return routeTitle;
      })
    ),
    { initialValue: defaultTitle }
  );

  constructor() {
    effect(() => {
      this.translate.currentLanguage();
      this.title.setTitle(this.translateService.instant(this.currentTitle()));
    });
  }
}

export const setupTitle = () => {
  const titleService = inject(TitleService);
};
