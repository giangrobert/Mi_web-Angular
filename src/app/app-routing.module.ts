import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './web/home/home.component';
import { ServiciosComponent } from './web/servicios/servicios.component';
import { ProductosComponent } from './web/productos/productos.component';
import { RegistroComponent } from './web/registro/registro.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servicio', component:ServiciosComponent},
  {path: 'producto', component:ProductosComponent},
  {path:'registro', component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
