import { Injectable } from '@angular/core';
import { WebAuth, Auth0Error, AuthOptions, Auth0Callback, Auth0UserProfile } from 'auth0-js';
import { environment } from 'src/environments/environment';
import { ConfigurationService } from './configuration.service';

export enum Auth0Connection {
  Sms = 'sms'
}

export enum Auth0Send {
  Code = 'code'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth0Client!: WebAuth;

  constructor(private cfg: ConfigurationService) {
    this.initializeClient({clientID: this.cfg.auth0Config.clientID});
  }

  async sendOTP(phoneNumber: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const params: any = {
        clientID: this.cfg.auth0Config.clientID,
        domain: this.cfg.auth0Config.domain,
        responseType: 'code',
        scope: 'openid profile email',
        audience: this.cfg.auth0Config.audience,
        redirectUri: this.cfg.auth0Config.redirectUri
      };

      const passwordlessAuth0Client = new WebAuth(params);

      passwordlessAuth0Client.passwordlessStart({
        phoneNumber,
        connection: Auth0Connection.Sms,
        send: Auth0Send.Code,
      },
      (result: any, error: Auth0Error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      }
    );
    });
  }

  async verifyPhoneNumber(phoneNumber: string, verificationCode: string): Promise<any | Auth0Error> {
    return new Promise(async (resolve, reject) => {
      const url: RequestInfo = `https://${this.cfg.auth0Config.domain}/oauth/token`;
      const auth0Params = {
        grant_type: 'http://auth0.com/oauth/grant-type/passwordless/otp',
        client_id: this.cfg.auth0Config.clientID,
        username: phoneNumber,
        otp: verificationCode,
        realm: 'sms',
        scope: 'openid profile email',
        audience: this.cfg.auth0Config.audience,
      };

      const fetchParams: RequestInit = {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(auth0Params)
      };

      try {
        const fetchRes: Response = await fetch(url, fetchParams);
        const jsonRes = await fetchRes.json();
        fetchRes.ok ? resolve(jsonRes) : reject(jsonRes);
      } catch (err) {
        reject(err);
      }
    });
  }

  async loginUser(username: string, password: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      this.initializeClient();

      this.auth0Client.login({
        password,
        username,
        redirectUri: this.cfg.auth0Config.redirectUri,
        audience: this.cfg.auth0Config.audience,
        realm: 'User-Pass-Auth-Auth0-DB',
        responseType: 'code'
      }, (err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  }

  async forgotPassword(email: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      this.initializeClient();

      this.auth0Client.changePassword({
        email: email,
        connection: 'User-Pass-Auth-Auth0-DB'
      }, (err, res) => {
        err ? reject(err) : resolve(res);
      });
    });
  }

  private initializeClient(options?: Partial<AuthOptions>): void {
    const auth0Options: AuthOptions = {...this.cfg.auth0Config, ...options};
    if (!auth0Options.domain) {
      return; // to prevent the need of hardcoded values
    }

    this.auth0Client = new WebAuth(auth0Options);
  }
}