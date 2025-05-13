import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'trm-default-layout',
  imports: [Header, RouterOutlet, Footer, CdkScrollable],
  templateUrl: './default-layout.html',
  host: {
    class: 'h-screen flex flex-col',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLayout {}
