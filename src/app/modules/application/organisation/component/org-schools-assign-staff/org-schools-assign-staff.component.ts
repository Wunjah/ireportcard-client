import {Component, Input, OnInit} from '@angular/core';
import {TableModel} from "../../../../library/crud/models/table.model";
import {SchoolStaffService} from "../../../../../services/http/school/school-staff.service";
import {Id} from "../../../../../models/entity/base/base.entity";
import {SchoolUtil} from "../../../../../utils/school.util";

@Component({
  selector: 'app-org-schools-assign-admin',
  templateUrl: './org-schools-assign-staff.component.html',
  styleUrls: ['./org-schools-assign-staff.component.css']
})
export class OrgSchoolsAssignStaffComponent implements OnInit {
  @Input()
  schoolId?: Id | undefined;
  table?: TableModel;

  constructor(private _schoolStaffService: SchoolStaffService) {

  }

  ngOnInit() {
    if (this.schoolId) {
      this._schoolStaffService.getPayloadBySchoolId(this.schoolId).subscribe(res => {
        this.table = SchoolUtil.createSchoolStaffTable(res);
      });
    }
  }
}
