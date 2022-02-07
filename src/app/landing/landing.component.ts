import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  public requestInProgress: boolean = false;
  public form!: FormGroup;
  public title = "Let's get you signed in."

  constructor(private fb: FormBuilder, private authService: AuthService, private snackbar: SnackBarService) {
    this.form =  this.fb.group({});
  }

  async submitted() : Promise<void> {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }
    
    this.requestInProgress = true
    try {
      await this.authService.loginUser(this.form.value['username'], this.form.value['password'])
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