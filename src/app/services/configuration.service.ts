import { Injectable } from '@angular/core';
import { Environment, CountryConfiguration, Country, Auth0Config, OtpConfig, PasswordConfig, IdpConfig } from '../../environments/interfaces';
import { environment } from '../../environments/environment';
import { AuthOptions } from 'auth0-js';

const DEFAULT_COUNTRY = environment.countryCode as Country;

declare global {
  interface Window {
    auth0Config: any;
  }
}

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
    const windowConfig = window.auth0Config;

    return {
      domain: windowConfig?.auth0Domain ?? this.cfg.auth0?.domain,
      clientID: windowConfig?.clientID ?? this.cfg.auth0?.clientID,
      audience: (windowConfig?.extraParams?.audience || windowConfig?.auth0Tenant) ?? this.cfg.auth0?.audience,
      redirectUri: windowConfig?.callbackURL ?? this.cfg.auth0?.redirectUri,
      state: windowConfig?.internalOptions?.state ?? this.cfg.auth0?.state
    };
  }

  getCountryCfgByCode(code: Country): CountryConfiguration {
    return environment.countries[code];
  }
}