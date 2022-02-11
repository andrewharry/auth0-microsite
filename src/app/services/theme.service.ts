import { Injectable } from '@angular/core';
import { MaterialCssVarsService } from 'angular-material-css-vars';
import { ResourceFactory } from '../resources/resource.factory';

@Injectable({ providedIn: 'root' })
export class ThemeService {

    constructor(material: MaterialCssVarsService, resources: ResourceFactory) {
        let primary = resources.GetByTheme('Theme_PrimaryColor');

        material.setPrimaryColor(primary);
        this.setCustomVariable('--color-primary', primary);

        if (!resources.IsEnabled('Display_Navbar'))
            this.setCustomVariable('--navbar-height', 0);

        material.setAccentColor(resources.GetByTheme('Theme_AccentColor'));
        material.setWarnColor(resources.GetByTheme('Theme_WarnColor'));
        material.setAutoContrastEnabled(true);
        material.setAlternativeColorAlgorithm(true);
        material.setDarkTheme(false);
    }

    setCustomVariable(variable: string, value: any) {
        const body = document.getElementsByTagName("body")[0];
        body.style.setProperty(variable, value);
    }
}