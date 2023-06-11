import {Component, Host, Input, OnInit} from '@angular/core';
import {AppFormControl, formControlProviders} from "../app-form-control";
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-input',
  styleUrls: ['./input.component.css'],
  providers: [formControlProviders(InputComponent)],
  template: `
  `
})
export class InputComponent extends AppFormControl implements OnInit {
  @Input()
  controlName: string = ''
  readonly formGroup!: FormGroup;

  constructor(@Host() private formGroupDirective: FormGroupDirective) {
    super();
    this.formGroup = this.formGroupDirective.form
    console.log(this.formGroup)
  }
  ngOnInit() {

  }

}
