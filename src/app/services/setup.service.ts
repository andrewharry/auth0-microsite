import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'

@Injectable({ providedIn: 'root' })
export class SetupService {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    console.info('Registering Custom SVG Icons');
    this.matIconRegistry.addSvgIcon(
      'eye', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/eye.svg')
    );

    this.matIconRegistry.addSvgIcon(
      'eye-closed', this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/icons/eye-closed.svg')
    );
  }
}