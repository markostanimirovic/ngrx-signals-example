import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '01', pathMatch: 'full' },
  {
    path: '01',
    loadComponent: () => import('./01-signal-store/counter.component'),
  },
  {
    path: '02',
    loadComponent: () => import('./02-signal-store-feature/counter.component'),
  },
  {
    path: '03',
    loadComponent: () => import('./03-rxjs-integration/users.component'),
  },
  {
    path: '04',
    loadComponent: () => import('./04-entities/todos.component'),
  },
];
