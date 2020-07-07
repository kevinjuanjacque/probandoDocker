import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import{ Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})


export class FilesService {

  private URL="http://localhost:3000";
  constructor(private httpClient: HttpClient, private router: Router) { }

  DevolverArchivos(){
    return this.httpClient.get(this.URL+"/file/");
  }
  misArchivos() {
   return this.httpClient.get(this.URL+'/Misfile/');
  }
}
