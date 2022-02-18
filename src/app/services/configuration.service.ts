import { Injectable } from '@angular/core';
import { Environment, Auth0Config, OtpConfig, PasswordConfig, IdpConfig, Country, Product } from '../../environments/interfaces';
import { environment } from '../../environments/environment';

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

  get product(): Product { return environment.product; }

  get country(): Country {
    switch(environment.product) {
      case Product.HummAU: return Country.AU;
      case Product.HummNZ: return Country.NZ;
      case Product.HummCA: return Country.CA;
      case Product.BundllAU: return Country.AU;
      case Product.BundllNZ: return Country.NZ;
      default: throw new Error(`Country not set for ${environment.product}`);
    }
  }

  get isProduction(): boolean {
    return environment.production;
  }

  get passwordConfig(): PasswordConfig {
    return environment.password;
  }

  get otpConfig(): OtpConfig {
    return environment.otp;
  }

  get idpConfig(): IdpConfig {
    return environment.idp;
  }

  get auth0Config() : Auth0Config {
    const windowConfig = window.auth0Config;

    return {
      domain: windowConfig?.auth0Domain ?? environment.auth0?.domain,
      clientID: windowConfig?.clientID ?? environment.auth0?.clientID,
      audience: (windowConfig?.extraParams?.audience || windowConfig?.auth0Tenant) ?? environment.auth0?.audience,
      redirectUri: windowConfig?.callbackURL ?? environment.auth0?.redirectUri,
      state: windowConfig?.internalOptions?.state ?? environment.auth0?.state
    };
  }
}