import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';
import Routes from '../../routes';
@Component({
  selector: 'app-phone-verify',
  templateUrl: './phone-verify.component.html'
})
export class PhoneVerifyComponent implements OnInit {

  private phoneNumber!: string;

  public requestInProgress: boolean = false;
  public form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private snackbar: SnackBarService) {
    this.form =  this.fb.group({});
  }

  ngOnInit(): void {
    const { phoneNumber } = history.state || {};

    if (!phoneNumber) {
      this.snackbar.error('Missing mobile number');
      this.router.navigate([Routes.PhoneNumber]);
    }

    this.phoneNumber = phoneNumber;
  }

  async onSubmit() : Promise<void> {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }
    
    this.requestInProgress = true;
    try {
      let code = this.form.value['code'];
      await this.authService.verifyPhoneNumber(this.phoneNumber, code);
      this.router.navigate([Routes.SetPassword], {
        state: {
          phoneNumber: this.phoneNumber
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