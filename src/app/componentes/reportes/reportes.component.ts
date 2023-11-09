import { Component } from '@angular/core';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
declare var $:any
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  constructor(private peticion:PeticionService, private msg:MensajesService){}
ngOnInit(): void {
    this.cargartodas()
}
nombres:string = ""
apellidos:string = ""
identificacion:string = ""
deuda:number = 0
miid:string = ""


datos:any [] = []

nuevo(){
  this.nombres = ""
  this.apellidos = ""
  this.identificacion = ""
  this.deuda = 0
  this.miid = ""
  $('#exampleModal').modal('show')
}

guardar(){
  let post = {
    host:this.peticion.urllocal,
    path:"/reportes/guardar",
    payload:{
      nombres:this.nombres,
      apellidos:this.apellidos,
      identificacion:this.identificacion,
      deuda:this.deuda
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
  path:"/reportes/cargarid",
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
    this.deuda = res.documentos[0].deuda

  }
)
}
cargartodas(){
  let post = {
    host:this.peticion.urllocal,
    path:"/reportes/cargardatos",
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
    path:"/reportes/actualizar",
    payload:{
      id:this.miid,
      nombres:this.nombres,
      apellidos:this.apellidos,
      identificacion:this.identificacion,
      deuda:this.deuda
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
    path:"/reportes/eliminar",
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
