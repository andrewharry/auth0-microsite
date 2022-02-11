import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResourceFactory } from '../../resources/resource.factory';

type passwordType = 'password' | 'text';

@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html'
})
export class PasswordInputComponent implements OnInit { 
  private minLength = 8;  
  showLabels: boolean = false;
  @Input() form!: FormGroup;
  control: FormControl = new FormControl('', Validators.compose([Validators.required, Validators.minLength(this.minLength)]));
  inputType: passwordType = 'password';

  constructor(resourceFactory: ResourceFactory) {
    this.showLabels = resourceFactory.GetResource('ShowLabels') == 'true';
  }

  get showPassword(): boolean {
    return this.inputType === 'password';
  }

  ngOnInit(): void {
    if (this.form) {
      this.form.addControl('password', this.control);
    }
  }

  toggle(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
  
  get errors(): string {
    if (this.control.valid)
      return '';

      for (let key in this.control.errors) {
      {
        switch (key) {
          case "required": return "Please enter your password";
          case "minlength": return `Your password should be at least ${this.minLength} characters long`;
          default: return key;
        }
      }          
    }
    return '';
  }
}