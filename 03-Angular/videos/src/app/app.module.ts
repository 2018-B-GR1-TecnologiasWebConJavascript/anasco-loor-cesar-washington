import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaMenuComponent } from './rutas/ruta-menu/ruta-menu.component';
import { RutaPerfilComponent } from './rutas/ruta-perfil/ruta-perfil.component';
import { RutaP404Component } from './rutas/ruta-p404/ruta-p404.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
import { RutaGestionProductosComponent } from './rutas/ruta-gestion-productos/ruta-gestion-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaMenuComponent,
    RutaPerfilComponent,
    RutaP404Component,
    RutaGestionUsuariosComponent,
    RutaGestionProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
* <router-outlet></router-outlet>
* -Inicio
* -Login
* -Perfil
* -Menu
*     <router-outlet></router-outlet>
*     - Gestion Usuarios
*         - Crear usuarios
*         - Actualizar Usuarios
*     - Gestion Productos
*         - Crear Producto
*         - Actualizar Producto
* */

