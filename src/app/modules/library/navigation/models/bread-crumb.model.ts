import {AppRoute} from "../../../../app.routes";
import {MenuItemContent} from "primeng/menu";
import {MenuItem} from "primeng/api";

export class BreadCrumbModel {
  constructor(public route: AppRoute) {
  }

  get name() {
    if (this.route.name == '') {
      return this.route.routes[this.route.routes.length - 1].name;
    }
    return this.route.name;
  }

  get path() {
    return this.route.path;
  }
}

export interface BreadCrumbMenuItem {routerLink: string, label: string}


