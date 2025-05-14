import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/default/default-layout').then(m => m.DefaultLayout),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/main/main').then(m => m.Main),
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => m.Login),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/settings/settings').then(m => m.Settings),
      },
    ],
  },
];
