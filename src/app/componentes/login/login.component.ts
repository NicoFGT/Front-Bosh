import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private peticion:PeticionService,private msg:MensajesService, private router:Router){

  }
  correo:string = ""
  password:string = ""

  login(){
    let post = {
      host:this.peticion.urllocal,
      path:"/usuarios/login",
      payload:{
        correo:this.correo,
        password:this.password,
      }
    }
    this.peticion.post(post.host + post.path,post.payload).then(
      (res:any) =>{
        console.log(res)
        if (res.state == true) {
          this.msg.load("success",res.mensaje)
          this.router.navigate(["inicio"])
        }
        else{
          this.msg.load("danger",res.mensaje)
        }
      }
    )
  }
}
