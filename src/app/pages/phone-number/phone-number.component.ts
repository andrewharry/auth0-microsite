import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';
import Routes from '../../routes';
@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html'
})
export class PhoneNumberComponent {
  public requestInProgress: boolean = false;
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private snackbar: SnackBarService) {
    this.form =  this.fb.group({});
  }

  async onSubmit() : Promise<void> {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }
    
    this.requestInProgress = true;
    try {
      let number = this.form.value['mobile'];
      await this.authService.sendOTP(number);
      this.router.navigate([Routes.PhoneVerify], {
        state: {
          phoneNumber: number
        },
      })

    } catch (err) {
      this.handleError(err);
    } finally {
      this.requestInProgress = false;
    }
  }

  handleError(error: any) {
    this.snackbar.error(error)
  }
}