import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule) },
  { path: 'conversiones', loadChildren: () => import('./pages/conversions/conversions.module').then( m => m.ConversionsModule) },
  { path: 'calcular-fecha', loadChildren: () => import('./pages/calculate-date/calculate-date.module').then( m => m.CalculateDateModule)},
  { path: 'formulario', loadChildren: () => import('./pages/form/form.module').then( m => m.FormModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
