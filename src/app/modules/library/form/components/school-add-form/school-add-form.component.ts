import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubmitForm} from "../form/submit.form";
import {SchoolEntity} from "../../../../../models/entity/school/school.entity";
import {DEFAULT_ID} from "../../../../../utils/base.util";
import {OrganisationId} from "../../../../../services/general/local-storage.service";

@Component({
  selector: 'app-school-add-form',
  templateUrl: './school-add-form.component.html',
  styleUrls: ['./school-add-form.component.css']
})
export class SchoolAddFormComponent implements SubmitForm {
  @Output()
  submitEvent = new EventEmitter<SchoolEntity>();
  readonly form: FormGroup = this._fb.group({
    name: ['', Validators.required],
    maxGrade: [20, Validators.required],
    organisationId: [DEFAULT_ID]
  });

  constructor(private _fb: FormBuilder) {
  }

  submit(): void {
    const school: SchoolEntity = {
      name: this.form.get('name')?.value,
      maxGrade: this.form.get('maxGrade')?.value,
      organisationId: OrganisationId
    }
    this.submitEvent.emit(school)
  }
}
