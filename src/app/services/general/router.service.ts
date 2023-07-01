import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationExtras, Router} from "@angular/router";
import {AppRoute} from "../../app.routes";
import {LocalStorageService} from "./local-storage.service";
import {NavGroupKey} from "../../utils/nav.util";
import {BreadCrumbModel} from "../../modules/library/navigation/models/bread-crumb.model";

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private _route?: ActivatedRoute;

  constructor(
    private _router: Router,
    private _localStorage: LocalStorageService
  ) {
  }

  set route(r: ActivatedRoute) {
    this._route = r;
  }

  nav = (commands: any[], extras?: NavigationExtras, callback?: () => void) => {
    let c = commands.map(command => {
      if (command instanceof AppRoute) {
        return command.path;
      }
      return command;
    });
    this._router.navigate(c, extras).then(() => {
      if (callback) {
        callback()
      }
    });
  }

  reload(){
    this.nav([this._router.url])
  }

  switchDashboard = (key: NavGroupKey) => {
    const target = [];
    switch (key) {
      case "org-admin-nav": target.push('/app/organisation'); break;
      case "school-admin-nav": target.push('/app/school'); break;
      case "student-nav": target.push('/app/student'); break;
    }

    this.nav(target, undefined, () => {
      this._localStorage.set("current_dashboard", key);
      console.log(`Current dashboard: ${key}`);
      this.reload();
    });
  }

  param = <T> (p: string): T => {
    if (this._route) {
      return this._route.snapshot.params[p] as T;
    } else {
      throw Error("Activated route not initialised")
    }
  }
}
