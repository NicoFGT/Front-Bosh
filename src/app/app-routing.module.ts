import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SolicitarComponent } from './componentes/solicitar/solicitar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';



const routes: Routes = [
  {path:"header", component:HeaderComponent, pathMatch:'full'},
  {path:"footer", component:FooterComponent, pathMatch:'full'},
  {path:"home", component:HomeComponent, pathMatch:'full'},
  {path:"clientes", component:ClientesComponent, pathMatch:'full'},
  {path:"registro", component:RegistroComponent, pathMatch:'full'},
  {path:"dashboard", component:DashboardComponent, pathMatch:'full'},
  {path:"inicio", component:InicioComponent, pathMatch:'full'},
  {path:"usuarios", component:UsuariosComponent, pathMatch:'full'},
  {path:"solicitar", component:SolicitarComponent, pathMatch:'full'},
  {path:"reportes", component:ReportesComponent, pathMatch:'full'},
  {path:"login", component:LoginComponent, pathMatch:'full'},
  {path:"**", redirectTo:"", pathMatch:'full'}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
