import {Component, OnInit} from '@angular/core';
import {NavItem, NavItemGroup} from "../../models/nav-item.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../../services/user/user.service";
import {isOrganisationRole} from "../../../../../models/base/role.enum";
import {NavUtil} from "../../../../../utils/nav.util";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  navItemGroup = new NavItemGroup("main", [])

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
  ) {
  }

  ngOnInit() {
   this._userService.getByPrincipal().subscribe(res => {
     if (isOrganisationRole(res.account?.role)) {
       this.navItemGroup = NavUtil.ORGANISATION_ADMIN_NAV_GROUP
     }
   })
  }

  clickNavItemAction(item: NavItem) {
    this.navItemGroup.switchActive(item);
  }
}
