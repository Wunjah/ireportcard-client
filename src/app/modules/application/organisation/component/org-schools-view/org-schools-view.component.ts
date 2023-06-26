import { Component } from '@angular/core';
import {RouterService} from "../../../../../services/general/router.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SchoolService} from "../../../../../services/school/school.service";
import {SchoolModel} from "../../../../../models/school/school.model";
import {AppRoute, AppRoutes} from "../../../../../app.routes";

@Component({
  selector: 'app-org-schools-view',
  templateUrl: './org-schools-view.component.html',
  styleUrls: ['./org-schools-view.component.css']
})
export class OrgSchoolsViewComponent {
  protected school?: SchoolModel;

  constructor(
    private _route: ActivatedRoute,
    private _routerService: RouterService,
    private _schoolService: SchoolService,
  ) {
    this._routerService.route = _route;
    const schoolId = this._routerService.param<number>('id');
    this._schoolService.getById(schoolId).subscribe(res => this.school = res);
  }

  protected readonly AppRoute = AppRoute;
}
