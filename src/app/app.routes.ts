import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '01', pathMatch: 'full' },
  {
    path: '01',
    loadComponent: () => import('./01-signal-state/user-details.component'),
  },
  {
    path: '02',
    loadComponent: () => import('./02-signal-state-service/users.component'),
  },
  {
    path: '04',
    loadComponent: () => import('./04-signal-store-entities/todos.component'),
  },
];
