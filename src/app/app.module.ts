import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from "@angular/material/icon";
import { MaterialModule } from './material/material.module';
import { LandingComponent } from './landing/landing.component';
import { PasswordInputComponent } from './landing/components/password-input.component';
import { UsernameInputComponent } from './landing/components/username-input.component';

import { ForgotPasswordLink } from './landing/components/forgot-password-link';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { SetupService } from './services/setup.service';
import { AuthService } from './services/auth.service';
import { SnackBarService } from './services/snack-bar.service';

import { DirectivesModule } from './directives/directives.module';
import { ResourceModule } from './resources/resource.module';

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
  providers: [SetupService, AuthService, SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }