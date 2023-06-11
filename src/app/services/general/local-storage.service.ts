import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService extends AppService<any>{
  private readonly prefix = '_transkript';
  constructor() {
    super();
  }

  set = (key: LocalStorageKey, value: string) => localStorage.setItem(this.resolveKey(key), value)

  get = (key: LocalStorageKey): string | null => localStorage.getItem(this.resolveKey(key))

  remove = (key: LocalStorageKey) => localStorage.removeItem(this.resolveKey(key))

  private resolveKey = (key: LocalStorageKey) => `${this.prefix}_${key}`
}

export type LocalStorageKey = 'access_token'
