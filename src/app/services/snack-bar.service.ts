import { Injectable } from '@angular/core';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  private defaultConfig: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };

  private errorClass = 'mat-snack-bar-error';

  constructor(private snackBar: MatSnackBar) { }

  getErrorMessage(err: any): string {
    if (typeof err === 'string' || err instanceof String) return String(err)
    if (!err) return ''
    // Auth0 is not consistent in the naming of the error description field
    const message = err.errorDescription 
                    ?? err.error_description 
                    ?? err.description 
                    ?? err.Detail?.replace(/.+\:/g,'') 
                    ?? err.Title
                    ?? err.toString()
                    ?? `Error code: ${err.code ?? err.Status}` 
                     
    return message
  }

  open(msg: string, action = 'Ok', cfg?: MatSnackBarConfig): void {
    this.snackBar.open(msg, action, {
      ...this.defaultConfig,
      ...cfg,
    });
  }

  error(error: any, action = 'Ok', cfg?: MatSnackBarConfig): void {
    const msg = this.getErrorMessage(error)
    this.open(msg, action, {
      panelClass: this.errorClass,
      ...cfg,
    });
  }
}