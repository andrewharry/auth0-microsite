import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Routes from '../../routes';

@Component({
  selector: 'forgot-password-link',
  template: `<button type="button" mat-button disableRipple color="secondary" class="forgot-password-btn" (click)="onClick($event)">{{'ForgotPassword_Link' | resource}}</button>`,
  styleUrls: ['./forgot-password-link.scss']
})
export class ForgotPasswordLink  { 
  @Input() form!: FormGroup;

  constructor(private router: Router) {}

  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.router.navigate([Routes.ForgotPassword], {
      state: { username: this.form.value['username'] },
    })
  }
}