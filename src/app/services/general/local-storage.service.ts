import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {DEFAULT_ID, DEFAULT_STRING} from "../../utils/base.util";
import {NavGroupKey} from "../../utils/nav.util";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService extends AppService<any>{
  private readonly prefix = '_transkript';
  constructor() {super(); }

  set = (key: LocalStorageKey, value: any) => localStorage.setItem(this.resolveKey(key), value)

  get = (key: LocalStorageKey): LocalStorageValueType => {
    const value = localStorage.getItem(this.resolveKey(key))
    if (value == null || value == 'null') {
      return undefined;
    }
    if (!isNaN(Number(value))) {
      return Number(value)
    } else if (value) {
      return value;
    } else {
      return undefined;
    }
  }

  remove = (key: LocalStorageKey) => localStorage.removeItem(this.resolveKey(key))

  clear = () => localStorage.clear()

  private resolveKey = (key: LocalStorageKey) => `${this.prefix}_${key}`
}

export type LocalStorageValueType =
  string |
  number |
  boolean |
  undefined

export type LocalStorageKey =
  'access_token' |
  'organisation_id' |
  'school_id' |
  'current_dashboard';

export const AccessToken = <string> new LocalStorageService().get("access_token",) ?? DEFAULT_STRING,
  SchoolId = <number | undefined> new LocalStorageService().get("school_id"),
  OrganisationId = <number> new LocalStorageService().get("organisation_id") ?? DEFAULT_ID,
  CurrentDashboard = <NavGroupKey | undefined> new LocalStorageService().get("current_dashboard");
