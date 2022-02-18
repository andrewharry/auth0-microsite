import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { PhoneNumberComponent } from './pages/phone-number/phone-number.component';
import { PhoneVerifyComponent } from './pages/phone-verify/phone-verify.component';
import { ForgotPasswordComponent } from './pages/forgot/forgot-password.component';
import { SetPasswordComponent } from './pages/set-password/set-password.component';
import Route from './routes';

const routes: Routes = [
  { path: Route.Login, component: LoginComponent },
  { path: Route.PhoneNumber, component: PhoneNumberComponent },
  { path: Route.PhoneVerify, component: PhoneVerifyComponent },
  { path: Route.ForgotPassword, component: ForgotPasswordComponent },
  { path: Route.SetPassword, component: SetPasswordComponent },
  { path: '', redirectTo: `/${Route.Login}`, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
