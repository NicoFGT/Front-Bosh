import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http' 
import { FormsModule } from '@angular/forms';
import { InterceptorService } from './interceptor/interceptor.service';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { LoginComponent } from './componentes/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MenuprivadoComponent } from './componentes/menuprivado/menuprivado.component';
import { HeaderprivadoComponent } from './componentes/headerprivado/headerprivado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { SolicitarComponent } from './componentes/solicitar/solicitar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistroComponent,
    MensajesComponent,
    ClientesComponent,
    ReportesComponent,
    LoginComponent,
    DashboardComponent,
    MenuprivadoComponent,
    HeaderprivadoComponent,
    InicioComponent,
    SolicitarComponent,
    UsuariosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InterceptorService,
      multi:true
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
