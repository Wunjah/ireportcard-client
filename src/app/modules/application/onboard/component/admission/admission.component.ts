import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SchoolService} from "../../../../../services/http/school/school.service";
import {RouterService} from "../../../../../services/general/router.service";
import {SchoolEntity} from "../../../../../models/entity/school/school.entity";

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit{
  school?: SchoolEntity;

  constructor (
    private _route: ActivatedRoute,
    private _routerService: RouterService,
    private _schoolService: SchoolService,
  ){
  }

  ngOnInit() {
    this._routerService.route = this._route
    const invitationId = this._routerService.param<string>('invitationId');
    this._schoolService.getByActiveAdmissionInvitation(invitationId).subscribe(res => this.school = res);
  }
}
