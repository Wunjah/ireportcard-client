import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../../services/user/user.service";
import {TableModel} from "../../../../library/crud/models/table.model";
import {UserUtil} from "../../../../../utils/user.util";
import {LocalStorageService} from "../../../../../services/general/local-storage.service";

@Component({
  selector: 'app-org-members',
  templateUrl: './org-members.component.html',
  styleUrls: ['./org-members.component.css']
})
export class OrgMembersComponent implements OnInit {
  table?: TableModel;
  constructor(private _userService: UserService,) {
  }

  ngOnInit(): void {
    this._userService.getAllByOrganisation().subscribe(res => {
      this.table = UserUtil.createTable(res, "Members");
    })
  }
}
