import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta predeterminada
  { path: 'login', component: LoginComponent }, // Ruta para la página de inicio de sesión
  { path: 'home', component: HomeComponent }, // Ruta para la página de inicio de sesión
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
