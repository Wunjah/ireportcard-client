import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormModel} from "../../../form/models/form/form.model";
import {FormControlAttributes} from "../../../form/models/form/form-control.model";
import {ObjectUtil} from "../../../../../utils/object.util";
import {SubmitForm} from "../../../form/components/form/submit.form";

@Component({
  selector: 'app-data-filter',
  styleUrls: ['./datafilter.component.css'],
  template: `
    <div class="p-2">
      <button (click)="filterDiv.hidden = !filterDiv.hidden">Filter</button>
      <div #filterDiv [hidden]="true">
        <form class="row g-3" [formGroup]="form">
          <div *ngFor="let control of formControlModels" class="col-md-4">
            <label for="{{control.name}}" class="form-label">{{control.label}}</label>
            <input
              *ngIf="control.type != 'select'"
              (change)="submit()"
              type="{{control.type ?? 'text'}}" class="form-control"
              formControlName="{{control.name}}"
              id="{{control.name}}">
            <select
              *ngIf="control.type == 'select'"
              (change)="submit()"
              class="form-select form-control"
              formControlName="{{control.name}}"
              id="{{control.name}}">
              <option *ngFor="let controlValue of control.values" [value]="controlValue.id">
                {{controlValue.name | titlecase}}
              </option>
            </select>
          </div>
          <div class="text-center gap-2">
            <button type="submit" class="btn btn-primary" (click)="submit()">Filter</button>&nbsp;
            <button type="reset" class="btn btn-secondary" (click)="form.reset()">Reset</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class DatafilterComponent implements OnInit, SubmitForm {
  @Input()
  formModel: FormModel = FormModel.empty();

  @Output()
  submitEvent: EventEmitter<any> = new EventEmitter<any>();

  formControlModels: FormControlAttributes[] = [];
  form: FormGroup = this._fb.group({});

  private controls: [string, any][] = [];

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.formControlModels = this.formModel.attribs.formControls.map(v => v.attribs) ?? [];
    this.controls = this.formControlModels.map(value => [value.name, []]);
    this.form = this._fb.group(ObjectUtil.from(this.controls));
  }

  submit() {
    this.submitEvent.emit(this.form.value);
  }
}


