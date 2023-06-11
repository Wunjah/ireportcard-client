import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrgMembersComponent} from "./component/org-members/org-members.component";

const routes: Routes = [
  {
    path: 'members',
    component: OrgMembersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule { }
