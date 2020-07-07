import { Component, OnInit } from '@angular/core';

import {SubirFileService} from '../../services/subir-file.service'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
declare var M: any;
@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit {
  Asignatura='';
  Categoria='';
  Descripcion='';
  
  file: File;
  constructor(public upFile: SubirFileService) { }

  ngOnInit(): void {
  }
  fileChange(event:HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) 
      this.file = <File>event.target.files[0];
  }
  uploadFile(Asignatura, Categoria,descripcion) {
    
    this.upFile.subirArchivo(Asignatura, Categoria,descripcion,this.file).subscribe((res)=> {
      console.log('response received is ', res)
    },
    err=>{
      M.toast({html: `ERROR ${err.status}: ${err.error.status}`,classes: 'rounded'})
    }
    
      );
    }
    
}

