import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { SubirArchivoComponent } from './componentes/subir-archivo/subir-archivo.component';
import { MisArchivosComponent } from './componentes/mis-archivos/mis-archivos.component';
import { UltimoComponent } from './componentes/ultimo/ultimo.component';


//librerias importadas 
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthGuard} from './auth.guard'
import {TokenInterceptorService} from './services/token-interceptor.service'


@NgModule(
  {
  
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    BuscadorComponent,
    SubirArchivoComponent,
    MisArchivosComponent,
    UltimoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
