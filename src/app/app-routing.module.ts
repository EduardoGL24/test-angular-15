import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ConversionsComponent } from './pages/conversions/conversions.component';
import { CalculateDateComponent } from './pages/calculate-date/calculate-date.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'conversiones', component: ConversionsComponent },
  { path: 'calcular-fecha', component: CalculateDateComponent},
  { path: 'formulario', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
