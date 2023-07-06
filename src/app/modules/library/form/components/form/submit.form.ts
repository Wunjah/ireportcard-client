import {EventEmitter} from "@angular/core";
import {FormGroup} from "@angular/forms";

export interface SubmitForm {
  submitEvent?: EventEmitter<any>;
  form: FormGroup;

  submit(): void
}
