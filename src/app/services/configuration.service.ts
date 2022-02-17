import { Injectable } from '@angular/core';
import { Environment, Auth0Config, OtpConfig, PasswordConfig, IdpConfig } from '../../environments/interfaces';
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

  get cfg(): Environment {
    return environment;
  }

  get isProduction(): boolean {
    return environment.production;
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
}