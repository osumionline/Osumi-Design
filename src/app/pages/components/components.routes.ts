import { Route } from '@angular/router';

const COMPONENTS_ROUTES: Route[] = [
  {
    path: 'o-badge',
    loadComponent: () => import('./o-badge-docs/o-badge-docs.component'),
  },
  {
    path: 'o-button',
    loadComponent: () => import('./o-button-docs/o-button-docs.component'),
  },
  {
    path: 'o-button-icon',
    loadComponent: () =>
      import('./o-button-icon-docs/o-button-icon-docs.component'),
  },
  {
    path: 'o-button-link',
    loadComponent: () =>
      import('./o-button-link-docs/o-button-link-docs.component'),
  },
  {
    path: 'o-card',
    loadComponent: () => import('./o-card-docs/o-card-docs.component'),
  },
  {
    path: 'o-card-header',
    loadComponent: () =>
      import('./o-card-header-docs/o-card-header-docs.component'),
  },
  {
    path: 'o-card-content',
    loadComponent: () =>
      import('./o-card-content-docs/o-card-content-docs.component'),
  },
  {
    path: 'o-card-footer',
    loadComponent: () =>
      import('./o-card-footer-docs/o-card-footer-docs.component'),
  },
  {
    path: 'o-header',
    loadComponent: () => import('./o-header-docs/o-header-docs.component'),
  },
  {
    path: 'o-icon',
    loadComponent: () => import('./o-icon-docs/o-icon-docs.component'),
  },
  {
    path: 'o-list',
    loadComponent: () => import('./o-list-docs/o-list-docs.component'),
  },
  {
    path: 'o-list-item',
    loadComponent: () =>
      import('./o-list-item-docs/o-list-item-docs.component'),
  },
  {
    path: 'o-loading',
    loadComponent: () => import('./o-loading-docs/o-loading-docs.component'),
  },
];

export default COMPONENTS_ROUTES;
