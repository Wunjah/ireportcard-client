import {Component, OnInit} from '@angular/core';
import {NavItem, NavItemGroup} from "../../models/nav-item.model";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {UserService} from "../../../../../services/user/user.service";
import {isOrganisationRole, isSchoolRole} from "../../../../../models/entity/base/role.enum";
import {NavUtil} from "../../../../../utils/nav.util";

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.css'],
  template: `
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <li *ngFor="let navItem of navItemGroup.navItems" class="nav-item {{navItem.active ? 'show' : ''}}">
          <span class="nav-link collapsed"
                [attr.data-bs-target]="'#' + navItem.code"
                (click)="clickNavItemAction(navItem)"
                data-bs-toggle="collapse">
            <a [routerLink]="[navItem.link]">
              <i class="{{navItem.icon}}"></i>
            </a>
            <span>{{navItem.name}}</span>
            <i *ngIf="navItem.children" class="bi bi-chevron-down ms-auto"></i>
          </span>
          <ul id="{{navItem.code}}" *ngIf="navItem.children" class="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li *ngFor="let childItem of navItem.children" (click)="clickNavItemAction(childItem)">
              <a [routerLink]="[navItem.link + childItem.link]" class="{{childItem.active ? 'active' : ''}}">
                <i class="bi bi-circle"></i>
                <span>{{childItem.name}}</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  `
})
export class SidebarComponent implements OnInit {
  navItemGroup = new NavItemGroup("main", [])

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
  ) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        if (url.startsWith("/app/organisation")) {
          this.navItemGroup = NavUtil.ORGANISATION_ADMIN_NAV_GROUP;
        } else if (url.startsWith("/app/school")) {
          this.navItemGroup = NavUtil.SCHOOL_ADMIN_NAV_GROUP;
        }
      }
    });
  }

  ngOnInit() {
    this._userService.getByPrincipal().subscribe(res => {
      if (isOrganisationRole(res.account?.role)) {
        this.navItemGroup = NavUtil.ORGANISATION_ADMIN_NAV_GROUP
      } else if (isSchoolRole(res.account?.role)) {
        this.navItemGroup = NavUtil.SCHOOL_ADMIN_NAV_GROUP;
      }
    });
  }

  clickNavItemAction(item: NavItem) {
    this.navItemGroup.switchActive(item);
  }
}
