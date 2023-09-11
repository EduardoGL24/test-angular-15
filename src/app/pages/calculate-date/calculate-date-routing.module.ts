import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateDateComponent } from './calculate-date.component';

const routes: Routes = [
  { path: '', component: CalculateDateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculateDateRoutingModule { }
