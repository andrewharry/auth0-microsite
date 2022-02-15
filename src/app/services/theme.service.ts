import { Component, Injectable, Inject, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MaterialCssVarsService } from 'angular-material-css-vars';
import { ResourceFactory } from '../resources/resource.factory';

@Injectable({ providedIn: 'root' })
export class ThemeService {

    constructor(material: MaterialCssVarsService, resources: ResourceFactory, private sanitizer: DomSanitizer) {
        let primary = resources.GetByTheme('Theme_PrimaryColor');

        material.setPrimaryColor(primary);
        this.setCssVariable('--color-primary', primary);

        if (!resources.IsEnabled('Navbar_Enabled'))
            this.setCssVariable('--navbar-height', 0);

        material.setAccentColor(resources.GetByTheme('Theme_AccentColor'));
        material.setWarnColor(resources.GetByTheme('Theme_WarnColor'));
        this.setCssVariable('--body-text-color', resources.GetByTheme('Theme_BodyTextColor'));
        material.setAutoContrastEnabled(false);
        material.setAlternativeColorAlgorithm(true);
        material.setDarkTheme(false);

        let themeCss = resources.GetByTheme('Theme_CustomCss');

        if (themeCss) {
            this.loadTheme(`${themeCss}.css`);
        }
    }

    setCssVariable(variable: string, value: any) {
        const body = document.getElementsByTagName("body")[0];
        body.style.setProperty(variable, value);
    }

    loadTheme(styleName: string) {
        this.sanitizer.bypassSecurityTrustResourceUrl(styleName);
        const head = document.getElementsByTagName('head')[0];
        const elementId = 'custom-theme';
        let themeLink = document.getElementById(elementId) as HTMLLinkElement;
        if (themeLink) {
          themeLink.href = styleName;
          return;
        }

        const style = document.createElement('link');
        style.id = elementId;
        style.rel = 'stylesheet';
        style.href = styleName;    
        head.appendChild(style);        
      }
}
