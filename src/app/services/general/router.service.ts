import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {AppRoute} from "../../app.routes";
import {LocalStorageService} from "./local-storage.service";
import {DashboardOption} from "../../app.types";

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(
    private _router: Router,
    private _localStorage: LocalStorageService
  ) {
  }

  private _route?: ActivatedRoute;

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

  ;reload() {
    this.nav([this._router.url], undefined, () => location.reload())
  }

  switchDashboard = (option: DashboardOption, reroute?: boolean) => {
    const target: string[] = [];
    switch (option) {
      case "organisation":
        target.push('/app/organisation');
        break;
      case "school":
        target.push('/app/school');
        break;
      case "teacher":
        target.push('/app/teacher');
        break;
      case "student":
        target.push('/app/student');
        break;
    }

    this._localStorage.set("current_dashboard", option);
    if (reroute) {
      this.nav(target, undefined, () => {
        this.reload();
      });
    }
  }

  param = <T>(p: string): T => {
    if (this._route) {
      return this._route.snapshot.params[p] as T;
    } else {
      throw Error("Activated route not initialised")
    }
  }
}
