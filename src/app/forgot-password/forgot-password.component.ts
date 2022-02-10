import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SnackBarService } from '../services/snack-bar.service';
import Routes from '../routes';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

  public requestInProgress: boolean = false;
  public form!: FormGroup;
  public title = "Change your Password.";
  public subTitle = "To securely reset your password we'll send a code to your mobile.";

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private snackbar: SnackBarService) {
    this.form =  this.fb.group({});
  }

  ngOnInit(): void {
    let { username } = history.state || {};

    if (username && username.indexOf('@') == -1) {
      username = '';
    }

    this.form.value['username'] = username;
  }

  async onSubmit() : Promise<void> {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }
    
    this.requestInProgress = true

    try 
    {
      await this.authService.forgotPassword(this.form.value['username']);
      this.snackbar.open("Check your email for the link!");
      this.router.navigate([Routes.Landing], {
        state: { username: this.form.value['username'] },
      });
    }
    catch (err) {
      console.error(err);
      this.snackbar.error(err);    
    } finally {
      this.requestInProgress = false
    }
  }

  handleError(error: any) {
    this.snackbar.error(error)
  }
}
