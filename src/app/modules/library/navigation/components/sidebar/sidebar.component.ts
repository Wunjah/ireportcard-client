import {Component, OnInit} from '@angular/core';
import {NavItem, NavItemGroup} from "../../models/nav-item.model";
import {RouterService} from "../../../../../services/general/router.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  navItemGroup = new NavItemGroup(
    "main",
   [
    {
      id: "dashboard-nav",
      name: "Dashboard",
      icon: "bi bi-grid",
      link: "/app/dashboard"
    },
    {
      id: "user-nav",
      name: "User",
      icon: "bi bi-person-fill",
      link: "/app/user",
      children: [
        {
          name: "Profile",
          icon: "bi bi-person-fill",
          link: "/profile/",
        }
      ]
    }
  ]
  )

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentUrl = this._router.url;
        const matchingNavItem = this.navItemGroup.navItems.find((item) => {
          return currentUrl.startsWith(item.link);
        });
        console.log(matchingNavItem)
        if (matchingNavItem) {
          this.navItemGroup.switchActive(matchingNavItem);
        }
      })
  }

  clickNavItemAction(item: NavItem, parent: boolean) {
    this.navItemGroup.switchActive(item);
    console.log(this.navItemGroup)
  }
}
