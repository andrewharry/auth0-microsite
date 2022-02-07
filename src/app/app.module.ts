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

import { SetupService } from './services/setup.service';
import { AuthService } from './services/auth.service';
import { SnackBarService } from './services/snack-bar.service';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PasswordInputComponent,
    UsernameInputComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule    
  ],
  providers: [SetupService, AuthService, SnackBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }