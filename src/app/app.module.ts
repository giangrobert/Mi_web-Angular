import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './web/home/home.component';
import { ServiciosComponent } from './web/servicios/servicios.component';
import { ProductosComponent } from './web/productos/productos.component';
import { RegistroComponent } from './web/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    ProductosComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
