import { Routes } from '@angular/router';
import { Kanban } from './pages/kanban/kanban';

export const routes: Routes = [
  { path: 'kanban', component: Kanban, title: 'Kanban board' },
  { path: '**', redirectTo: '/kanban' },
];
