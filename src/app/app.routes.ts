import { Routes } from '@angular/router';

export const routes: Routes = [
   {
    path:'bienvenido',
    loadComponent:()=> import('./bienvenido/bienvenido.page').then(m=>m.BienvenidoPage)
   },
  {
    path: 'iniciar-sesion',
    loadComponent: () => import('./iniciar-sesion/iniciar-sesion.page').then( m => m.IniciarSesionPage)
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'menu-principal',
    loadComponent: () => import('./menu-principal/menu-principal.page').then( m => m.MenuPrincipalPage)
  },
  {
    path: 'listar-producto',
    loadComponent: () => import('./listar-producto/listar-producto.page').then( m => m.ListarProductoPage)
  },
  {
    path: 'mostra-producto',
    loadComponent: () => import('./mostra-producto/mostra-producto.page').then( m => m.MostraProductoPage)
  },
  {
    path: 'cudproducto',
    loadComponent: () => import('./cudproducto/cudproducto.page').then( m => m.CUDProductoPage)
  }
];
