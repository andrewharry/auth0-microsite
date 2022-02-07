import { Environment, Country } from './interfaces';

export const environment: Environment = {
  production: true,
  hostDomain: '#{ idp-spa-cdn-endpoint-url-noslash }#',
  root: 'https://andrewharry.github.io/auth0-microsite',
  countryCode: '#{ idp-country-code }#',
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
    system: '#{ idp-system }#',
    product: '#{ idp-product }#',
    url: '#{ idpfacade-apim-url }#',
    version: '#{ idpfacade-apim-version }#'
  }
};