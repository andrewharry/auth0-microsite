import { Injectable } from '@angular/core';
import { IUserInfo } from '../common/interfaces';
import { AuthService } from './auth.service';
import { ConfigurationService } from './configuration.service';
import { IdpService } from './idp.service';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private authService: AuthService, private idpFacade: IdpService, private cfg: ConfigurationService) { }

  async create(user: IUserInfo): Promise<any> {
    if (user == null || user.email == null) {
        throw new Error("Email address not set");
    }

    if (user.password == null) {
        throw new Error("Password not set");
    }
      
    //TODO: idpFacade should handle searching for existing users!
    //await this.idpFacade.registerUser()

    return this.authService.loginUser(user.email, user.password);    
  }
}