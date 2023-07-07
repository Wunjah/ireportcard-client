import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrganisationRoutingModule} from './organisation-routing.module';
import {OrgMembersComponent} from './component/org-members/org-members.component';
import {LibraryModule} from "../../library/library.module";
import {OrgMembersAddAdminComponent} from './component/org-members-add-admin/org-members-add-admin.component';
import {OrgMembersAddStaffComponent} from './component/org-members-add-staff/org-members-add-staff.component';
import {OrgSchoolsComponent} from './component/org-schools/org-schools.component';
import {OrgSchoolsAddComponent} from './component/org-schools-add/org-schools-add.component';
import {OrgSchoolsAssignStaffComponent} from './component/org-schools-assign-staff/org-schools-assign-staff.component';
import {OrgSchoolsViewComponent} from './component/org-schools-view/org-schools-view.component';
import {ReactiveFormsModule} from "@angular/forms";
import { OrgDashboardComponent } from './component/org-dashboard/org-dashboard.component';


@NgModule({
  declarations: [
    OrgMembersComponent,
    OrgMembersAddAdminComponent,
    OrgMembersAddStaffComponent,
    OrgSchoolsComponent,
    OrgSchoolsAddComponent,
    OrgSchoolsAssignStaffComponent,
    OrgSchoolsViewComponent,
    OrgDashboardComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule,
    LibraryModule,
    ReactiveFormsModule
  ]
})
export class OrganisationModule {
}
