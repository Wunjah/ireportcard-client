import {Component} from '@angular/core';
import {SchoolEntity} from "../../../../../models/entity/school/school.entity";
import {SchoolService} from "../../../../../services/http/school/school.service";

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

  addSchoolAction($event: SchoolEntity) {
    console.log($event)
    this._schoolService.create($event).subscribe();
  }
}
