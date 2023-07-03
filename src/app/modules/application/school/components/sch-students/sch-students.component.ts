import {Component} from '@angular/core';
import {TableModel} from "../../../../library/crud/models/table.model";
import {UserService} from "../../../../../services/user/user.service";
import {UserFilter} from "../../../../../filter/user/user.filter";
import {Role} from "../../../../../models/entity/base/role.enum";
import {Gender, genderValues} from "../../../../../models/entity/base/gender.enum";
import {FormModel} from "../../../../library/form/models/form/form.model";
import {FormControlModel, FormControlValue} from "../../../../library/form/models/form/form-control.model";
import {OrganisationId, SchoolId} from "../../../../../services/general/local-storage.service";
import {UserUtil} from "../../../../../utils/user.util";

@Component({
  selector: 'app-sch-students',
  styleUrls: ['./sch-students.component.css'],
  template: `
    <app-data-filter [formModel]="dataFilterForm" (submitEvent)="dataFilterAction($event)"></app-data-filter>
    <app-datatable *ngIf="table" [table]="table"></app-datatable>
  `
})
export class SchStudentsComponent {
  table?: TableModel;
  filter: UserFilter = new UserFilter({
    approved: true,
    role: Role.STUDENT,
    schoolId: SchoolId,
    organisationId: OrganisationId
  });
  dataFilterForm: FormModel;

  constructor(private _userService: UserService) {
    this.dataFilterForm = new FormModel({
      formControls: [
        new FormControlModel({
          label: "Gender",
          name: "gender",
          type: "select",
          values: FormControlValue.ofArray(genderValues)
        }),
      ]
    });
    this.refresh()
  }

  dataFilterAction($event: any) {
    this.filter.update($event);
    this.refresh();
  }

  refresh = () => {
    this._userService.get(this.filter).subscribe(res => {
      this.table = UserUtil.createTable(res, "Students");
    });
  }
}
