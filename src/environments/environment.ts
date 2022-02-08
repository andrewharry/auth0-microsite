import { Environment, Country } from './interfaces';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  countryCode: '61',
  defaultCountry: Country.AU,
  root: '',
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