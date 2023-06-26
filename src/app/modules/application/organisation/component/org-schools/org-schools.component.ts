import {Component, OnInit} from '@angular/core';
import {TableRowAction, TableModel} from "../../../../library/crud/models/table.model";
import {UserUtil} from "../../../../../utils/user.util";
import {SchoolService} from "../../../../../services/school/school.service";
import {LocalStorageService, OrganisationId} from "../../../../../services/general/local-storage.service";
import {SchoolUtil} from "../../../../../utils/school.util";
import {Id} from "../../../../../models/base/base.model";
import {RouterService} from "../../../../../services/general/router.service";
import {AppRoute, AppRoutes} from "../../../../../app.routes";

@Component({
  selector: 'app-org-schools',
  templateUrl: './org-schools.component.html',
  styleUrls: ['./org-schools.component.css']
})
export class OrgSchoolsComponent implements OnInit{
  table?: TableModel;

  constructor(
    private _routerService: RouterService,
    private _schoolService: SchoolService) {
  }

  ngOnInit(): void {
    this._schoolService.getAllByOrganisation(OrganisationId).subscribe(res => {
      const tableAction = {
        name: "View",
        action: (id: Id) => this._routerService.nav([`${AppRoute.APP_ORGANISATION_SCHOOLS_VIEW.path}/${id}`])
      }

      this.table = SchoolUtil.createSchoolsTable(res, tableAction);
    })
  }
}
