import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameInputService } from '../../services/username-input.service';

@Component({
  selector: 'username-input',
  templateUrl: './username-input.component.html'
})
export class UsernameInputComponent implements OnInit {
  @Input() form!: FormGroup;
  control: FormControl = new FormControl('', Validators.compose([Validators.required]));

  constructor(public input: UsernameInputService) { }

  ngOnInit(): void {
    if (this.form) {
      this.form.addControl('username', this.control);

      const { username } = history.state || {};
      this.control.setValue(username);
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