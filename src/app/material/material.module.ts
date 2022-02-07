import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule
  ]
})
export class MaterialModule { }