import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaMenuComponent} from "./rutas/ruta-menu/ruta-menu.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaPerfilComponent} from "./rutas/ruta-perfil/ruta-perfil.component";
import {RutaP404Component} from "./rutas/ruta-p404/ruta-p404.component";
import {RutaGestionUsuariosComponent} from "./rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionProductosComponent} from "./rutas/ruta-gestion-productos/ruta-gestion-productos.component";
import {RutaCrearUsuariosComponent} from "./rutas/ruta-crear-usuarios/ruta-crear-usuarios.component";
import {RutaActualizarUsuariosComponent} from "./rutas/ruta-actualizar-usuarios/ruta-actualizar-usuarios.component";
import {RutaCrearProductoComponent} from "./rutas/ruta-crear-producto/ruta-crear-producto.component";
import {RutaActualizarProductoComponent} from "./rutas/ruta-actualizar-producto/ruta-actualizar-producto.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    // Nombre
    path:'inicio',
    // Componente
    component: RutaInicioComponent
  },
  {
    path: 'menu',
    component: RutaMenuComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gestion-productos'
      },
      {
        path: 'gestion-usuarios',
        component: RutaGestionUsuariosComponent,
          children: [
              {
                  path: 'crear-usuarios',
                  component: RutaCrearUsuariosComponent
              },
              {
                  path: 'actualizar-usuarios',
                  component: RutaActualizarUsuariosComponent
              },
          ]
      },
      {
        path: 'gestion-productos',
        component: RutaGestionProductosComponent,
          children: [
              {
                  path: 'crear-producto',
                  component: RutaCrearProductoComponent
              },
              {
                  path: 'actualizar-producto',
                  component: RutaActualizarProductoComponent
              },
          ]
      }
    ]
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'perfil',
    component: RutaPerfilComponent
  },
  {
    path: 'no-encontrado',
    component: RutaP404Component
  },
  {
    path: '**',
    redirectTo: 'no-encontrado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
