import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  ngOnInit(): void{
    this.status()
  }

  nombres:string = "cargando..."
  rol:string = "cargando..."

  constructor(private peticion:PeticionService,private msg:MensajesService, private router:Router){}
  status(){
    let post = {
      host:this.peticion.urllocal,
      path:"/usuarios/status",
      payload:{
        
      }
    }
    this.peticion.post(post.host + post.path,post.payload).then(
      (res:any) =>{
        console.log(res)
        if (res.nombres == undefined) {
          this.msg.load("danger", "su tiempo de sesion ha expirado")
          this.router.navigate(["login"])
        }
        else{
        this.nombres = res.nombres
        this.rol = res.rol
        }
        
      }
    )
  }

}
