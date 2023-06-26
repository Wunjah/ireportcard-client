import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {AppService} from "../base/app.service";
import {AppEndpoint} from "../../app.endpoints";
import {LaunchResponse, LoginRequest, LoginResponse} from "../../models/authentication/login.model";
import {RegisterResponse} from "../../models/authentication/register.model";
import {UserPayload} from "../../models/user/user.payload";
import {LocalStorageService} from "../general/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends AppService<any> {

  constructor(private http: HttpClient, private _localStorage: LocalStorageService) {
    super();
  }

  launch = (): Observable<LaunchResponse> => {
    return this.http.get<LaunchResponse>(AppEndpoint.LAUNCH.url)
  }

  login = (request: LoginRequest): Observable<LoginResponse> => {
    const response = new Subject<LoginResponse>();
    this.http.post<LoginResponse>(AppEndpoint.AUTH_LOGIN.url, request)
      .subscribe(res => {
        response.next(res);
        response.complete();
        this._localStorage.set("access_token", res.token)
        this.launch().subscribe(launchResponse => {
          this._localStorage.set("school_id", String(launchResponse.schoolId))
          this._localStorage.set("organisation_id", String(launchResponse.organisationId))
        })
      });
    return response.asObservable()
  }

  register = (user: UserPayload): Observable<RegisterResponse> => {
    return this.http.post<RegisterResponse>(
      this.urlWithPath(AppEndpoint.AUTH_REGISTER.url),
      user
    );
  }
}
