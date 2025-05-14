import { CdkScrollable } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';

@Component({
  selector: 'min-default-layout',
  imports: [Header, RouterOutlet, Footer, CdkScrollable],
  templateUrl: './default-layout.html',
  host: {
    class: 'h-screen flex flex-col',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayout {}
