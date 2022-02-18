import { Component, Input, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResourceFactory } from '../../resources/resource.factory';

@Component({
  selector: 'code-input',
  templateUrl: './code-input.component.html'
})
export class CodeInputComponent implements OnInit { 
  showLabels: boolean = false;
  @Input() form!: FormGroup;
  control: FormControl = new FormControl('', Validators.compose([Validators.required]));

  constructor(resources: ResourceFactory) {
    this.showLabels = resources.IsEnabled('Display_Labels');
  }

  ngOnInit(): void {
    if (this.form) {
      this.form.addControl('code', this.control);
    }
  }
  
  get errors(): string {
    if (this.control.valid)
      return '';

      //TODO: Need to standardise error message lookup etc

      for (let key in this.control.errors) {
      {
        switch (key) {
          case "required": return "Please enter the verfication code";
          default: return key;
        }
      }          
    }
    return '';
  }
}