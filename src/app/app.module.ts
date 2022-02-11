import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from "@angular/material/icon";
import { MaterialModule } from './common/material.module';
import { LandingComponent } from './pages/landing/landing.component';
import { PasswordInputComponent } from './common/components/password-input.component';
import { UsernameInputComponent } from './common/components/username-input.component';

import { ForgotPasswordLink } from './common/components/forgot-password-link';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

import { SetupService } from './services/setup.service';
import { AuthService } from './services/auth.service';
import { SnackBarService } from './services/snack-bar.service';

import { DirectivesModule } from './common/directives/directives.module';
import { ResourceModule } from './resources/resource.module';

declare global {
  interface Window {
    _app_base: any;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PasswordInputComponent,
    UsernameInputComponent,
    ForgotPasswordLink,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    ResourceModule,
    DirectivesModule
  ],
  providers: [SetupService, AuthService, SnackBarService, {provide: APP_BASE_HREF, useValue: window['_app_base'] || '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }