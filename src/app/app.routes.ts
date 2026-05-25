import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage)
  },

  {
    path: 'detalhes/:id',
    loadComponent: () =>
      import('./pages/detalhes/detalhes.page').then(m => m.DetalhesPage)
  }

];