import { Injectable } from '@angular/core';



import { HttpClient } from '@angular/common/http';
import{ Router} from '@angular/router';




@Injectable({
  providedIn: 'root'
})

export class SubirFileService {
  private URL="http://localhost:3000";
  constructor(private httpClient: HttpClient, private router: Router) { }

  
  subirArchivo(Asignatura:string, Categoria:string,descripcion:string, File: File) {
    const fd = new FormData();
    console.log(Asignatura)
    fd.append('Asignatura', Asignatura);
    fd.append('Categoria', Categoria);
    fd.append('descripcion', descripcion);
    fd.append('foo', File);
    return this.httpClient.post(this.URL+'/file/upload', fd);
  }
}
