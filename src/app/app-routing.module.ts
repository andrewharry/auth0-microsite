import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'Success', component: SuccessComponent },
  { path: 'Login', component: LandingComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
