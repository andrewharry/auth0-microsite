import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html'
})
export class SetPasswordComponent implements OnInit {
  public requestInProgress: boolean = false;
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private snackbar: SnackBarService) {
    this.form =  this.fb.group({});
  }

  ngOnInit(): void {
    const {phoneNumber, result} = history.state || {};

    if (!phoneNumber) {
      this.snackbar.error('Missing mobile number');
      return;
    }

  }

  async onSubmit() : Promise<void> {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }
    
    this.requestInProgress = true
    try {
      
    } catch (err) {
      this.handleError(err)
    } finally {
      this.requestInProgress = false
    }
  }

  handleError(error: any) {
    this.snackbar.error(error)
  }
}