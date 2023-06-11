import { Injectable } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private _router: Router,) { }

  navigate = (commands: any[], extras?: NavigationExtras, callback?: () => void) => {
    this._router.navigate(commands, extras).then()
  }
}

