import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResourceFactory } from 'src/app/resources/resource.factory';

@Component({
  selector: 'username-input',
  templateUrl: './username-input.component.html'
})
export class UsernameInputComponent implements OnInit {
  showLabels: boolean = false;
  @Input() form!: FormGroup;
  control: FormControl = new FormControl('', Validators.compose([Validators.required]));

  constructor(resourceFactory: ResourceFactory) {
    this.showLabels = resourceFactory.GetResource('ShowLabels') == 'true';
  }

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