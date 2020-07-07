import { Component, OnInit } from '@angular/core';

import {FilesService} from '../../services/files.service'
import { Router } from '@angular/router';
declare var M: any;
@Component({
  selector: 'app-mis-archivos',
  templateUrl: './mis-archivos.component.html',
  styleUrls: ['./mis-archivos.component.css']
})
export class MisArchivosComponent implements OnInit {
  archivos=<any>[];
  constructor(public file:FilesService, public router: Router) { }
  
  ngOnInit(): void {
    this.file.misArchivos().subscribe(
      res=>{
        this.archivos=res;
        //console.log(this.archivos)
      },
      err=>{
        M.toast({html: `ERROR ${err.status}: ${err.error.status}`})
      }
    )
  }
  revisar(id){
    //console.log("localhost:3000/file/"+id)
    window.open("http://localhost:3000/file/"+id);
    
  }

}
