import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import{ Router} from '@angular/router'
declare var M: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL="http://localhost:3000";
  constructor(private httpClient: HttpClient, private router: Router) { }

  iniciarSesion(user){
     return this.httpClient.post<any>(this.URL+'/api/IniciarSesion',user);
  }
  verificaToken(): Boolean{
    return !!localStorage.getItem('token');
  }
  devuelveToken(){
    return localStorage.getItem('token')
  }
  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    this.router.navigate(['/Search']);
    M.toast({html:'Nos vemos!'});
  }
  nombre(){
    return this.httpClient.get<string>(this.URL+'/api/unico');
    
  }
}
