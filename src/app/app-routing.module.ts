import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'Success', component: SuccessComponent },
  { path: 'Login', component: LandingComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
