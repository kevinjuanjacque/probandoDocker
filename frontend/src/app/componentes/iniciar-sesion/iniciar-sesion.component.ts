import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service'
import{ Router} from '@angular/router'
declare var M: any;
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit {
  user={
    RUT:'',
    password:''
  };
  nombre;
  constructor(public auth: AuthService, private router: Router) { 
    
  }

  ngOnInit(): void {
    if(localStorage.getItem("token")!=''){
      this.auth.nombre().subscribe(
        res=>{
          this.nombre=res;
        },
        err=>console.log(err)
      )
    }
  }

  iniciarSesion(){
    this.auth.iniciarSesion(this.user).subscribe(
      res=>{
        
        localStorage.setItem("token",res.token);
        
        M.toast({html:'Bienvenido!'});
      },
      err=>{
        M.toast({html: `ERROR ${err.status}: ${err.error.status}`,classes: 'rounded'})
      }
      
    )
    
  }
  

}
