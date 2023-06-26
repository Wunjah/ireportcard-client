import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {DEFAULT_ID} from "../../utils/base.util";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService extends AppService<any>{
  private readonly prefix = '_transkript';
  constructor() {super(); }

  set = (key: LocalStorageKey, value: string) => localStorage.setItem(this.resolveKey(key), value)

  get = (key: LocalStorageKey): LocalStorageValueType | null => {
    const value = localStorage.getItem(this.resolveKey(key))
    if (!isNaN(Number(value))) {
      return Number(value)
    } else {
      return value
    }
  }

  remove = (key: LocalStorageKey) => localStorage.removeItem(this.resolveKey(key))

  clear = () => localStorage.clear()

  private resolveKey = (key: LocalStorageKey) => `${this.prefix}_${key}`
}

export type LocalStorageValueType =
  string |
  number |
  boolean
export type LocalStorageKey =
  'access_token' |
  'organisation_id' |
  'school_id'
export const AccessToken = <string> new LocalStorageService().get("access_token",) ?? DEFAULT_ID,
  SchoolId = <number> new LocalStorageService().get("school_id") ?? DEFAULT_ID,
  OrganisationId = <number> new LocalStorageService().get("organisation_id") ?? DEFAULT_ID;
