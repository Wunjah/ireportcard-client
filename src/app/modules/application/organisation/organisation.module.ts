import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { OrgMembersComponent } from './component/org-members/org-members.component';
import {LibraryModule} from "../../library/library.module";


@NgModule({
  declarations: [
    OrgMembersComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule,
    LibraryModule
  ]
})
export class OrganisationModule { }
