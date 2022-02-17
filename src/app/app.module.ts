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

// Common Components
import { NavbarComponent } from './common/components/navbar.component';
import { PasswordInputComponent } from './common/components/password-input.component';
import { UsernameInputComponent } from './common/components/username-input.component';
import { ForgotPasswordLink } from './common/components/forgot-password-link';
import { DirectivesModule } from './common/directives/directives.module';
import { ResourceModule } from './resources/resource.module';

// Pages
import { LandingComponent } from './pages/landing/landing.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

//Services
import { AuthService } from './services/auth.service';
import { DeviceWidthService } from './services/device-width.service';
import { NavbarService } from './services/navbar.service';
import { IconService } from './services/icon.service';
import { SnackBarService } from './services/snack-bar.service';
import { ThemeService } from './services/theme.service';
import { UsernameInputService } from './services/username-input.service';

declare global {
  interface Window {
    _app_base: any;
  }
}

@NgModule({
  declarations: [
    NavbarComponent,
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
  providers: [
    AuthService, 
    DeviceWidthService,
    NavbarService, 
    IconService,     
    SnackBarService, 
    UsernameInputService,    
    {
      provide: APP_BASE_HREF, useValue: window['_app_base'] || '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*services are injected to ensure the singleton constructor executes*/
  constructor(theme: ThemeService, setup: IconService) { }
 }