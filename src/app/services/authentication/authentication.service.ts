import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppService} from "../base/app.service";
import {AppEndpoints} from "../../app.endpoints";
import {LoginRequest, LoginResponse} from "../../models/authentication/login.model";
import {RegisterRequest, RegisterResponse} from "../../models/authentication/register.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends AppService<any> {

  constructor(private http: HttpClient) {
    super();
  }

  login = (request: LoginRequest): Observable<LoginResponse> => {
    return this.http.post<LoginResponse>(
      this.endpoint(AppEndpoints.auth.login),
      request
    );
  }

  register = (userReg: RegisterRequest): Observable<RegisterResponse> => {
    return this.http.post<RegisterResponse>(
      this.endpoint(AppEndpoints.auth.register),
      userReg
    );
  }
}
