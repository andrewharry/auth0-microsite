import { Injectable } from '@angular/core'
import { ConfigurationService } from './configuration.service'
import { v4 as uuidv4 } from 'uuid'

export interface IdpPostResetPasswordRequest {
  data: IdpPostResetPasswordRequestData
}

export interface IdpPostResetPasswordRequestData {
  id: string,
  type: string,
  attributes: IdpPostResetPasswordRequestDataAttributes
}

// precisely one of the two possible fields is required
export type IdpPostResetPasswordRequestDataAttributes = { email: string } | { phone_number: string }

export interface IdpPostUserRequestDataAttributes {
  email: string,
  password: string,
  group: string
}

export interface IdpPostUserRequestData {
  id: string,
  type?: string,
  attributes: IdpPostUserRequestDataAttributes
}

export interface IdpPostUserRequest {
  data: IdpPostUserRequestData
}

export interface IdpGetUserResponse {
  id: string,
  type: string,
  attributes: {
    email: string,
    email_verified: boolean
  }
}

export interface IdpGetUsersResponse {
  data: IdpGetUserResponse[]
}

@Injectable({
  providedIn: 'root',
})
export class IdpService {

  private headers: HeadersInit

  constructor(private cfg: ConfigurationService) {
    this.headers = {
      'X-InitialSystem': this.cfg.idpConfig.system,
      'X-CountryCode': this.cfg.country,
      'X-Product': this.cfg.product,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    }
  }

  findByEmail(email: string, token: string): Promise<IdpGetUsersResponse | null> {
    return new Promise(async (resolve, reject) => {
      const url: RequestInfo = `${this.cfg.idpConfig.url}/${this.cfg.idpConfig.version}/users?email=${encodeURIComponent(email)}`

      const fetchParams: RequestInit = {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          ...this.headers,
          'X-TrackingID': this.generateUUID(), // a random UUID
          Authorization: `Bearer ${token}`,
        },
      }

      try {
        const fetchRes = await fetch(url, fetchParams)
        const jsonRes = await fetchRes.json()
        fetchRes.ok ? resolve(jsonRes) : reject(jsonRes)
      } catch (err) {
        reject(err)
      }
    })
  }

  generateUUID(stripDash = false): string {
    let newId = uuidv4();
    if (stripDash) {
      newId = newId.replace('/-/g', '');
    }
    return newId;
  }


  registerUser(data: IdpPostUserRequestData, token: string, userSub: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      const url: RequestInfo = `${this.cfg.idpConfig.url}/${this.cfg.idpConfig.version}/users/${userSub}`;

      const requestBody: IdpPostUserRequest = { data };
      const fetchParams: RequestInit = {
        method: 'POST',
        headers: {
          ...this.headers,
          'X-TrackingID': this.generateUUID(), // a random UUID
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      };
      try {
        const fetchRes = await fetch(url, fetchParams);
        fetchRes.ok ? resolve() : reject();
      } catch (err) {
        reject(err);
      }
    });
  }

  resetPassword(email: any, phone: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      if (!email && !phone) {
        return reject('Phone number or email missing');
      }
      const url: RequestInfo = `${this.cfg.idpConfig.url}/${this.cfg.idpConfig.version}/password`;

      // only one OR the other property can be present in the request
      const attributes = email && !phone ? { email } : { phone_number: phone };

      const requestBody: IdpPostResetPasswordRequest = {
        data: {
          id: this.generateUUID(),
          type: 'user',
          attributes,
        },
      };

      const fetchParams: RequestInit = {
        method: 'POST',
        headers: {
          ...this.headers,
          'X-TrackingId': this.generateUUID(),
        },
        body: JSON.stringify(requestBody),
      };

      try {
        const fetchRes = await fetch(url, fetchParams);
        if (fetchRes.ok) {
          return resolve();
        }
        reject(await fetchRes.json());
      } catch (err) {
        reject(err);
      }
    });
  }
}
