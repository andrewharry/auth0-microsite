import { Environment, Country } from './interfaces';

export const environment: Environment = {
  version: '1.0.1',
  production: true,
  root: 'https://andrewharry.github.io/auth0-microsite',
  countryCode: '61', // '#{ idp-country-code }#',,
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