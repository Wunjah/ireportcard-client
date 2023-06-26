import { Component } from '@angular/core';
import {SchoolModel} from "../../../../../models/school/school.model";
import {SchoolService} from "../../../../../services/school/school.service";

@Component({
  selector: 'app-org-schools-add',
  templateUrl: './org-schools-add.component.html',
  styleUrls: ['./org-schools-add.component.css']
})
export class OrgSchoolsAddComponent {
  constructor(
    private _schoolService: SchoolService
  ) {
  }

  addSchoolAction($event: SchoolModel) {
    console.log($event)
    this._schoolService.create($event).subscribe();
  }
}
