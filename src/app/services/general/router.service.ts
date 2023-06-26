import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {AppRoute} from "../../app.routes";

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private _route?: ActivatedRoute;

  constructor(private _router: Router) { }

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

  param = <T> (p: string): T => {
    if (this._route) {
      return this._route.snapshot.params[p] as T;
    } else {
      throw Error("Activated route not initialised")
    }
  }
}

