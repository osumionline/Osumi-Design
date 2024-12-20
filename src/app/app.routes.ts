import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.default),
  },
  {
    path: 'component/:tag',
    loadComponent: () =>
      import('./pages/component/component.component').then((m) => m.default),
  },
];
export default routes;
