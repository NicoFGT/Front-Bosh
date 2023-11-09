import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
declare var $:any


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent  implements OnInit{
  constructor(private peticion:PeticionService, private msg:MensajesService){}
ngOnInit(): void {
    this.cargartodas()
}
nombres:string = ""
apellidos:string = ""
identificacion:string = ""
direccion:string = ""
telefono:number = 0
ingresos:number = 0
correo:string = ""
miid:string = ""

datos:any [] = []


nuevo(){
  this.nombres = ""
  this.apellidos = ""
  this.identificacion = ""
  this.direccion = ""
  this.telefono = 0
  this.ingresos = 0 
  this.correo = ""
  this.miid = ""

  $('#exampleModal').modal('show')
}

guardar(){
  let post = {
    host:this.peticion.urllocal,
    path:"/solicitar/guardar",
    payload:{
      nombres:this.nombres,
      apellidos:this.apellidos,
      identificacion:this.identificacion,
      direccion:this.direccion,
      telefono:this.telefono,
      ingresos:this.ingresos,
      correo:this.correo
    }
  }
  this.peticion.post(post.host + post.path,post.payload).then(
    (res:any) =>{
      console.log(res)
      if (res.state == true) {
        this.msg.load("success",res.mensaje)
        this.cargartodas()
        $('#exampleModal').modal('hide')
        
      }
      else{
        this.msg.load("danger",res.mensaje)
      }
    }
  )
}

cargarid(id:string){
  this.miid = id
 let post = {
  host:this.peticion.urllocal,
  path:"/lista/cargarid",
  payload:{
    id:id
  }
}
this.peticion.post(post.host + post.path,post.payload).then(
  (res:any) =>{
    console.log(res)
    $('#exampleModal').modal('show')
    this.nombres = res.documentos[0].nombres
    this.apellidos = res.documentos[0].apellidos
    this.identificacion = res.documentos[0].identificacion
    this.direccion = res.documentos[0].direccion
    this.telefono = res.documentos[0].telefono
    this.ingresos = res.documentos[0].ingresos
    this.correo = res.documentos[0].correo

  }
)
}

cargartodas(){
  let post = {
    host:this.peticion.urllocal,
    path:"/solicitar/cargardatos",
    payload:{
      
    }
  }
  this.peticion.post(post.host + post.path,post.payload).then(
    (res:any) =>{
      console.log(res)
      this.datos = res.documentos
    }
  )
}

actualizar(){
  let post = {
    host:this.peticion.urllocal,
    path:"/solicitar/actualizar",
    payload:{
      id:this.miid,
      nombres:this.nombres,
      apellidos:this.apellidos,
      identificacion:this.identificacion,
      direccion:this.direccion,
      telefono:this.telefono,
      ingresos:this.ingresos,
      correo:this.correo
    }
  }
  this.peticion.post(post.host + post.path,post.payload).then(
    (res:any) =>{
      console.log(res)
      if (res.state == true) {
        this.msg.load("success",res.mensaje)
        this.cargartodas()
        $('#exampleModal').modal('hide')
      }
      else{
        this.msg.load("danger",res.mensaje)
      }$('#exampleModal').modal('show')
  
    }
  )
}

eliminar(){
  let post = {
    host:this.peticion.urllocal,
    path:"/solicitar/eliminar",
    payload:{
      identificacion:this.identificacion,
      
    }
  }
  this.peticion.post(post.host + post.path,post.payload).then(
    (res:any) =>{
      console.log(res)
      if (res.state == true) {
        this.msg.load("success",res.mensaje)
        this.cargartodas()
        $('#exampleModal').modal('hide')
      }
      else{
        this.msg.load("danger",res.mensaje)
      }$('#exampleModal').modal('show')
  
    }
  )
}
}
