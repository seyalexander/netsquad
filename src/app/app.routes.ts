import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'login',
    loadComponent: () => import ('./ui/modules/auth/page/auth-page/auth-page.component').then(m => m.AuthPageComponent)
  },
  {
    path:'',
    loadComponent: () => import ('./ui/modules/home/home/home.component').then(m => m.HomeComponent),
    children: [
      {
        path: '',
        loadComponent: () => import ('./ui/modules/inicio/page/inicio-page/inicio-page.component').then(m => m.InicioPageComponent),
      },
      {
        path: 'clientes',
        loadComponent: () => import ('./ui/modules/Clients/page/lista-clientes-page/lista-clientes-page.component').then(m => m.ListaClientesPageComponent)
      }
    ]
  },
];
