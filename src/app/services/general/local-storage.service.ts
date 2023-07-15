import {Injectable} from '@angular/core';
import {DEFAULT_ID, DEFAULT_STRING} from "../../utils/base.util";
import {DashboardOption} from "../../app.types";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly prefix = '_transkript';

  constructor() {
  }

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
  'current_dashboard' |
  'onboard_form_value';

export const AccessToken = () => <string>new LocalStorageService().get("access_token",) ?? DEFAULT_STRING;
export const SchoolId = () => <number | undefined>new LocalStorageService().get("school_id");
export const OrganisationId = () => <number>new LocalStorageService().get("organisation_id") ?? DEFAULT_ID;
export const CurrentDashboard = () => <DashboardOption | undefined>new LocalStorageService().get("current_dashboard");
