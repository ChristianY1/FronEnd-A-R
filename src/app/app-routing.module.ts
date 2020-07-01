import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent}  from './app.component';
import { UserListComponent } from '../app/user-list/user-list.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { FacturasComponent } from './facturas/facturas.component';
import { FacturalistComponent } from './facturalist/facturalist.component';



const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'registrar', component: RegistroComponent },
  { path: 'facturar', component: FacturasComponent },
  { path: 'facturaList', component: FacturalistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
