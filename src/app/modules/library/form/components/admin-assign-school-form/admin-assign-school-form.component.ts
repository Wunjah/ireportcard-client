import {Component, EventEmitter, Input} from '@angular/core';
import {genderValues} from "../../../../../models/base/gender.enum";
import {SubmitForm} from "../form/submit.form";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Id} from "../../../../../models/base/base.model";

@Component({
  selector: 'app-admin-assign-school-form',
  styleUrls: ['./admin-assign-school-form.component.css'],
  template: `
    <h5 class="card-title">Register Admin Form</h5>
    <form class="row g-3" [formGroup]="form" (submit)="submit()">
      <div class="col-md-4">
        <label for="inputState" class="form-label">Gender</label>
        <select id="inputState" class="form-select form-control" formControlName="phone">
          <option selected disabled>Choose...</option>
        </select>
      </div>
      <div class="text-center gap-2">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="reset" class="btn btn-secondary" (click)="form.reset()">Reset</button>
      </div>
    </form>
  `
})
export class AdminAssignSchoolFormComponent implements SubmitForm {
  form: FormGroup;
  submitEvent: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  schoolId?: Id;

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      school: [this.schoolId, Validators.required]
    })
  }

  submit(): void {
  }

}
