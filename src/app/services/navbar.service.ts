import { Injectable } from '@angular/core';
import { ResourceFactory } from '../resources/resource.factory';
import { NavbarModes } from '../resources/resource.interfaces';

@Injectable({ providedIn: 'root' })
export class NavbarService {

    constructor(resources: ResourceFactory) {
        this.isEnabled = resources.IsEnabled('Navbar_Enabled');
        this.mode = resources.GetResource('Navbar_Mode') as NavbarModes;
        this.cssClass = this.setCssClass();
    }

    public isEnabled: boolean;
    public cssClass: string;
    private mode: NavbarModes;

    setCssClass(): string {
        if (!this.isEnabled)
            return '';

            switch (this.mode) {
                case 'desktop': return 'navbar-desktop';
                case 'mobile': return 'navbar-mobile';
                default: return 'navbar-mobile navbar-desktop';
            }
    }
}