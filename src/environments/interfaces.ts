import { AuthOptions } from 'auth0-js';

export enum Product {
  Default = 'humm',
  BundllAU = 'bundll-au',
  BundllNZ = 'bundll-nz',
  HummAU = 'humm-au',
  HummNZ = 'humm-nz',
  HummCA = 'humm-ca'
}

export enum Country {
  NZ = 'NZ',
  AU = 'AU',
  CA = 'CA'
}
  
export interface CountryConfiguration {
  phoneCode: string;
  phoneDisplayMask: string;
  phonePattern?: RegExp;
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
  version: string,
  product: Product,
  root: string,
  countries: {
    [key in Country]: CountryConfiguration;
  },
  auth0?: Auth0Config,
  otp: OtpConfig,
  password: PasswordConfig,
  idp: IdpConfig,
};

export interface Environment extends Configuration {
  production: boolean;
};