import { Injectable } from '@angular/core';
import {UserService} from "../http/user/user.service";
import {UserPayload} from "../../models/entity/user/user.payload";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  userPayload?: UserPayload;

  _userSubject: BehaviorSubject<UserPayload | undefined>;

  constructor(private _userService: UserService) {
    this._userSubject = new BehaviorSubject<UserPayload | undefined>(undefined);
  }

  get user() {
    if (this.userPayload == undefined) {
      this._userService.getByPrincipal().subscribe(res =>{
        this._userSubject.next(res);
        this.userPayload = res;
      });
    }
    return this._userSubject;
  }

  close = () => {
    this._userSubject.complete();
  }
}
