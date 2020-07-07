import { Component, OnInit } from '@angular/core';

import {FilesService} from '../../services/files.service'
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

declare var M: any;

@Component({
  selector: 'app-ultimo',
  templateUrl: './ultimo.component.html',
  styleUrls: ['./ultimo.component.css']
})




export class UltimoComponent implements OnInit {
  archivos;
  constructor(public file:FilesService, public router: Router) { }

  ngOnInit(): void {
    this.file.DevolverArchivos().subscribe(
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
