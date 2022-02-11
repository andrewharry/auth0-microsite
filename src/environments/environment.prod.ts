import { Environment, Product } from './interfaces';

export var environment: Environment = {
  product: Product.HummAU, // '#{ product-code }#'
  version: '1.0.2',
  production: true,
  root: 'https://andrewharry.github.io/auth0-microsite',
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
    CA: {
      phoneCode: '+1',
      phoneDisplayMask: 'XXX XXX XXXX',
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