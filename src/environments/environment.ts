import { AuthOptions } from 'auth0-js';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export enum Country {
  NZ = 'NZ',
  AU = 'AU'
}

export interface CountryConfiguration {
  phoneCode: string;
  phoneDisplayMask: string;
  phonePattern: RegExp;
}

export type Auth0RequiredField = 'domain' | 'clientID' | 'responseType' | 'scope' | 'audience' | 'redirectUri' | 'state';
export type Auth0Config = Pick<AuthOptions, Auth0RequiredField>;

export type OtpConfig = {
  length: number,
  allowNumbersOnly: boolean,
  disableAutoFocus?: boolean,
  inputStyles?: {[k: string]: string | number},
  inputClass?: string,
  containerClass?: string,
  containerStyles?: string,
  allowKeyCodes?: string[],
  isPasswordInput?: boolean,
  placeholder?: string,
};

export type PasswordConfig = {
  minLength: number,
  minUpperCase: number,
  minLowerCase: number,
  minSpecial: number,
};

export type IdpConfig = {
  system: string,
  product: string,
  url: string,
  version: string
};

export type Configuration = {
  countryCode: string,
  defaultCountry: Country,
  hostDomain: string,
  countries: {
    [key in Country]: CountryConfiguration;
  },
  auth0: Auth0Config,
  otp: OtpConfig,
  password: PasswordConfig,
  idp: IdpConfig,
};


export interface Environment extends Configuration {
  production: boolean;
};

export const environment: Environment = {
  production: false,
  hostDomain: 'localhost:4200',
  countryCode: '61',
  defaultCountry: Country.AU,
  countries: {
    AU: {
      phoneCode: '+61',
      phoneDisplayMask: 'XXX XXX XXX',
      phonePattern: /^0?4\d{8}$/,
    },
    NZ: {
      phoneCode: '+64',
      phoneDisplayMask: 'XX XXXX XXXX',
      phonePattern: /^0?2\d{7,9}$/,
    },
  },
  auth0: {
    // these two get replaced by the data passed in the rendered index.html
    domain: 'humm-au-sandbox.au.auth0.com',
    clientID: '9XCRGeQeqzrxft8A3xnUCTEqhODl9cM0',
    redirectUri: 'http://localhost:4200/Success',
    state: '',
    audience: '',
    responseType: 'code',
    scope: 'openid profile email'
  },
  otp: {
    length: 6,
    allowNumbersOnly: true,
    disableAutoFocus: true,
  },
  password: {
    minLength: 8,
    minUpperCase: 1,
    minLowerCase: 1,
    minSpecial: 1,
  },
  idp: {
    system: 'Auth0UniversalLoginSPA',
    product: 'humm',
    url: 'https://identity.uat.flexigroup.com.au/idpfacade',
    version: 'v1'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
