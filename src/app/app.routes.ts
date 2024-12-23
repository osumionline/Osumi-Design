import { Route, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.default),
  },
  {
    path: 'component',
    loadChildren: () =>
      import('./pages/components/components.routes').then(
        (m): Route[] => m.default
      ),
  },
];
export default routes;
