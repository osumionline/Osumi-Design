import { Route } from '@angular/router';

const COMPONENTS_ROUTES: Route[] = [
  {
    path: 'o-badge',
    data: { option: 'o-badge' },
    loadComponent: () => import('./o-badge-docs/o-badge-docs.component'),
  },
  {
    path: 'o-button',
    data: { option: 'o-button' },
    loadComponent: () => import('./o-button-docs/o-button-docs.component'),
  },
  {
    path: 'o-button-icon',
    data: { option: 'o-button-icon' },
    loadComponent: () =>
      import('./o-button-icon-docs/o-button-icon-docs.component'),
  },
  {
    path: 'o-button-link',
    data: { option: 'o-button-link' },
    loadComponent: () =>
      import('./o-button-link-docs/o-button-link-docs.component'),
  },
  {
    path: 'o-card',
    data: { option: 'o-card' },
    loadComponent: () => import('./o-card-docs/o-card-docs.component'),
  },
  {
    path: 'o-header',
    data: { option: 'o-header' },
    loadComponent: () => import('./o-header-docs/o-header-docs.component'),
  },
  {
    path: 'o-icon',
    data: { option: 'o-icon' },
    loadComponent: () => import('./o-icon-docs/o-icon-docs.component'),
  },
  {
    path: 'o-list',
    data: { option: 'o-list' },
    loadComponent: () => import('./o-list-docs/o-list-docs.component'),
  },
  {
    path: 'o-loading',
    data: { option: 'o-loading' },
    loadComponent: () => import('./o-loading-docs/o-loading-docs.component'),
  },
  {
    path: 'o-tabs',
    data: { option: 'o-tabs' },
    loadComponent: () => import('./o-tabs-docs/o-tabs-docs.component'),
  },
];

export default COMPONENTS_ROUTES;
