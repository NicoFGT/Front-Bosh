import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.css']
})
export class SolicitarComponent {
  constructor(public msg: MensajesService, private peticiion: PeticionService){

  }

  ngOnInit(): void {
  
  }

  nombres:string= ""
  apellidos:string= ""
  identificacion:string= ""
  correo:string= ""
  direccion:string= ""
  telefono:number= 0
  ingresos:number= 0
  

  datos:any[]=[

  ]

  guardar(){

    let post = {
      host:this.peticiion.urllocal,
      path:"/solicitar/guardar",
      payload:{
        nombres:this.nombres,
        apellidos:this.apellidos,
        identificacion:this.identificacion,
        correo:this.correo,
        direccion:this.direccion,
        telefono:this.telefono,
        ingresos:this.ingresos
      
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
