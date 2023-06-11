import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserPayload} from "../../models/user/user.payload";
import {AppEndpoints} from "../../app.endpoints";

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppService<any>{
  private readonly url = AppEndpoints.user

  constructor(private http: HttpClient) {
    super()
  }

  getByPrincipal = (): Observable<UserPayload> => {
    return this.http.get<UserPayload>(this.endpoint(`${this.url}/principal`))
  }

  getAllByOrganisation = (): Observable<UserPayload[]> => {
    return this.http.get<UserPayload[]>(this.endpoint(`${this.url}/organisation`));
  }
}
