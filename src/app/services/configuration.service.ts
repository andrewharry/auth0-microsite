import { Injectable } from '@angular/core';
import { environment, Environment, CountryConfiguration, Country, Auth0Config, OtpConfig, PasswordConfig, IdpConfig } from '../../environments/environment';

const DEFAULT_COUNTRY = environment.countryCode as Country;

export type Auth0ExtraParams = {
  isSignUp?: string // stringified boolean
};

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private appCountryCode = DEFAULT_COUNTRY;

  get countryCode(): Country {
    return this.appCountryCode;
  }

  get cfg(): Environment {
    return environment;
  }

  get country(): CountryConfiguration {
    return environment.countries[this.appCountryCode];
  }

  get hostDomain(): string {
    return environment.hostDomain;
  }

  get isProduction(): boolean {
    return environment.production;
  }

  get phoneCode(): string {
    return this.country.phoneCode;
  }

  get phoneNumberMask(): string {
    return this.country.phoneDisplayMask;
  }

  get passwordConfig(): PasswordConfig {
    return this.cfg.password;
  }

  get otpConfig(): OtpConfig {
    return this.cfg.otp;
  }

  get idpConfig(): IdpConfig {
    return this.cfg.idp;
  }

  get auth0Config() : Auth0Config {
    return environment.auth0;
  }

  getCountryCfgByCode(code: Country): CountryConfiguration {
    return environment.countries[code];
  }
}