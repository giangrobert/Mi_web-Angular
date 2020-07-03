import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { ServiciosComponent } from './web/servicios/servicios.component';
import { ProductosComponent } from './web/productos/productos.component';
import { RegistroComponent } from './web/registro/registro.component';
import { LoginComponent } from './web/login/login.component';
import { AdministradorComponent } from './web/administrador/administrador.component';
import { AuthGuard } from './guard/auth.guard';
import { Login2Component } from './web/login2/login2.component';
import { ContactosComponent } from './web/contactos/contactos.component';
import { NosotrosComponent } from './web/nosotros/nosotros.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servicio', component:ServiciosComponent},
  {path: 'producto', component:ProductosComponent},
  {path:'registro', component:RegistroComponent},
  {path:'loginn', component:LoginComponent},
  {path:'admin', component: AdministradorComponent, canActivate:[AuthGuard]},
  {path:'Login' , component: Login2Component},
  {path:'contactos' , component: ContactosComponent},
  {path:'nosotros' , component: NosotrosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
