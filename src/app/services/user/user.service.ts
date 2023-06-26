import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserPayload} from "../../models/user/user.payload";
import {AppEndpoint, AppEndpoints} from "../../app.endpoints";

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppService<any>{
  constructor(private http: HttpClient) {
    super(AppEndpoint.USER)
  }

  getByPrincipal = (): Observable<UserPayload> => {
    return this.http.get<UserPayload>(this.urlWithPath('/principal'));
  }

  getAllByOrganisation = (): Observable<UserPayload[]> => {
    return this.http.get<UserPayload[]>(this.urlWithPath('/organisation'));
  }
}
