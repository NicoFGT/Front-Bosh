import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-headerprivado',
  templateUrl: './headerprivado.component.html',
  styleUrls: ['./headerprivado.component.css']
})
export class HeaderprivadoComponent {
  constructor(private peticion:PeticionService,private msg:MensajesService,private router:Router){}
  logout(){
    let post = {
      host:this.peticion.urllocal,
      path:"/usuarios/logout",
      payload:{
        
      }
    }
    this.peticion.post(post.host + post.path,post.payload).then(
      (res:any) =>{
        console.log(res)
        if (res.state == true) {
          this.msg.load("success",res.mensaje)
          this.router.navigate(["login"])
        }
        else{
          this.msg.load("danger",res.mensaje)
        }
      }
    )
  }

}
