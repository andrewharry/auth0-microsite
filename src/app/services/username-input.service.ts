import { Injectable } from '@angular/core'
import { ResourceFactory } from 'src/app/resources/resource.factory';
import { UsernameModes } from 'src/app/resources/resource.interfaces';
import { DeviceWidthService } from './device-width.service';

@Injectable({ providedIn: 'root' })
export class UsernameInputService {
  showLabels: boolean = false;
  label: string = '';
  type: string = "email";
  mode: UsernameModes = 'mobile_or_email';

  constructor(resources: ResourceFactory, deviceWidth: DeviceWidthService) {
    this.showLabels = resources.IsEnabled('Display_Labels');
    let mode : UsernameModes = resources.GetResource('Username_Mode') as UsernameModes;

    if (mode == 'mobile_only_on_native') 
      mode = deviceWidth.isMobile ? 'mobile_only' : 'mobile_or_email';    

    //Default to email
    this.type = "email";

    switch (mode) {
      case 'email_only':
        this.label = resources.GetByLabel('Email_Label');
        break;
      case 'mobile_or_email': 
        this.label = resources.GetByLabel('MobileOrEmail_Label');
        break;        
      case 'mobile_only':
        this.type = "tel";
        this.label = resources.GetByLabel('Mobile_Label');
          break;
    }
  }
}