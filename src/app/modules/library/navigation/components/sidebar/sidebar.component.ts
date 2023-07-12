import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {UserService} from "../../../../../services/http/user/user.service";
import {NavUtil} from "../../../../../utils/nav.util";
import {TreeNodeSelectEvent} from "primeng/tree";
import {RouterService} from "../../../../../services/general/router.service";

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.css'],
  template: `
    <aside id="sidebar" class="sidebar">
      <div class="flex flex-column">
        <div class="mb-3">
          <p-tree
            [value]="navItemTree"
            (onNodeSelect)="nodeSelectedAction($event)"
            class="md:w-30rem"
            selectionMode="single">
          </p-tree>
        </div>
        <div class="align-baseline">
          <div class="grid">
            <div class="{{button.class}}" *ngFor="let button of actionButtons">
              <p-button
                label="{{button.label}}"
                styleClass="p-button-raised p-button-sm w-full {{button.style}}"
                icon="fas fa-light fa-{{button.icon}}"
                (click)="button.action()"></p-button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  `
})
export class SidebarComponent implements OnInit {
  navItemTree = NavUtil.ORGANISATION_ADMIN_NAV_TREE;
  @Output()
  switchDialogEvent = new EventEmitter<boolean>();
  @Output()
  logoutEvent = new EventEmitter<boolean>();
  actionButtons = [
    {
      label: "Switch",
      icon: "repeat",
      class: "col-12 md:col-6",
      style: "",
      action: () => this.switchDialogEvent.emit(true)
    },
    {
      label: "Logout",
      icon: "right-from-bracket",
      class: "col-12 md:col-6",
      style: "p-button-danger",
      action: () => this.logoutEvent.emit(true)
    },
  ]

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _routerService: RouterService,
    private _userService: UserService,
  ) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        if (url.startsWith("/app/organisation")) {
          this.navItemTree = NavUtil.ORGANISATION_ADMIN_NAV_TREE;
        } else if (url.startsWith("/app/school")) {
          this.navItemTree = NavUtil.SCHOOL_ADMIN_NAV_TREE;
        } else if (url.startsWith("/app/student")) {
          this.navItemTree = NavUtil.STUDENT_NAV_TREE;
        } else if (url.startsWith("/app/teacher")) {

        }
      }
    });
  }

  ngOnInit() {
  }

  nodeSelectedAction($event: TreeNodeSelectEvent) {
    const node = $event.node;
    this._routerService.nav([node.data]);
  }
}
