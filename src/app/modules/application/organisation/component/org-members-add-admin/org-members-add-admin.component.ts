import { Component } from '@angular/core';
import {UserPayload} from "../../../../../models/user/user.payload";

@Component({
  selector: 'app-org-members-add-admin',
  templateUrl: './org-members-add-admin.component.html',
  styleUrls: ['./org-members-add-admin.component.css']
})
export class OrgMembersAddAdminComponent {

  registerAdminAction($event: UserPayload) {
    console.log($event)
  }
}
