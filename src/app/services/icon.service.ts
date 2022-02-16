import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class IconService {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    console.info('Registering Custom SVG Icons');
    this.matIconRegistry.addSvgIcon(
      'eye', this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.root}/assets/icons/eye.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      'eye-closed', this.domSanitizer.bypassSecurityTrustResourceUrl(`${environment.root}/assets/icons/eye-closed.svg`)
    );
  }
}