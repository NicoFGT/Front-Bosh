import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public msg: MensajesService, private peticiion: PeticionService){

  }

  ngOnInit(): void {
  
  }

  nombres:string= ""
  apellidos:string= ""
  identificacion:string= ""
  correo:string= ""
  password:string= ""
  password2:string= ""

  datos:any[]=[

  ]

  guardar(){

    let post = {
      host:this.peticiion.urllocal,
      path:"/usuarios/guardar",
      payload:{
        nombres:this.nombres,
        apellidos:this.apellidos,
        identificacion:this.identificacion,
        correo:this.correo,
        password:this.password,
        password2:this.password2,
      }
    }
    this.peticiion.post(post.host + post.path,post.payload).then(
      (res:any) =>{
        console.log(res)
        if (res.state == false) {
          this.msg.load("danger",res.mensaje)
        }
        else{
          this.msg.load("success",res.mensaje)
        }
      }
    )
  }
  
}


