import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'username-input',
  templateUrl: './username-input.component.html',
  styles: [
    `:host { display:block; }`, 
    `mat-form-field { width: 100%; }`
  ]
})
export class UsernameInputComponent implements OnInit {

  @Input() form!: FormGroup;
  control: FormControl = new FormControl('', Validators.compose([Validators.required]));

  ngOnInit(): void {
    if (this.form) {
      this.form.addControl('username', this.control);
    }
  }

  get errors(): string {
    if (this.control.valid)
      return '';

      for (let key in this.control.errors) {
      {
          switch (key) {
            case "required": return "Please enter your email or mobile number";
          }
      }          
    }
    return '';
  }
}