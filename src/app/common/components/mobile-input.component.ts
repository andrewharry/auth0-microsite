import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResourceFactory } from '../../resources/resource.factory';

@Component({
  selector: 'mobile-input',
  templateUrl: './mobile-input.component.html'
})
export class MobileInputComponent implements OnInit { 
  showLabels: boolean = false;
  @Input() form!: FormGroup;
  control: FormControl = new FormControl('', Validators.compose([Validators.required]));

  constructor(resources: ResourceFactory) {
    this.showLabels = resources.IsEnabled('Display_Labels');
  }

  ngOnInit(): void {
    if (this.form) {
      this.form.addControl('mobile', this.control);
    }
  }
  
  get errors(): string {
    if (this.control.valid)
      return '';

      //TODO: Need to standardise error message lookup etc

      for (let key in this.control.errors) {
      {
        switch (key) {
          case "required": return "Please enter your mobile number";
          default: return key;
        }
      }          
    }
    return '';
  }
}