import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { TitleService } from './title-service';

@Injectable()
export class MinTitleStrategy extends TitleStrategy {
  private titleService = inject(TitleService);

  constructor() {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    this.titleService.setTitle(title);
  }
}
