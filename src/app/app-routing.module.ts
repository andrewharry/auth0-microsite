import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import Route from './routes';

const routes: Routes = [
  { path: Route.Landing, component: LandingComponent },
  { path: Route.ForgotPassword, component: ForgotPasswordComponent },
  { path: '', redirectTo: `/${Route.Landing}`, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
