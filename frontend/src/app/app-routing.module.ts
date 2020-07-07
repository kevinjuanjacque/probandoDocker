import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importando los componentes
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import  { BuscadorComponent } from './componentes/buscador/buscador.component';
import { SubirArchivoComponent }  from './componentes/subir-archivo/subir-archivo.component';
import { MisArchivosComponent } from './componentes/mis-archivos/mis-archivos.component';
import { UltimoComponent } from './componentes/ultimo/ultimo.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/Search',
    pathMatch:'full'
  },
  {
    path: 'Search',
    component: BuscadorComponent
  },
  {
    path: 'Upload',
    component: SubirArchivoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'MisFiles',
    component: MisArchivosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Reciente',
    component: UltimoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
