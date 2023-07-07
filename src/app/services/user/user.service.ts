import {Injectable} from '@angular/core';
import {AppService} from "../base/app.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserPayload} from "../../models/entity/user/user.payload";
import {AppEndpoint} from "../../app.endpoints";
import {UserFilter} from "../../models/filter/user/user.filter";
import {DEFAULT_ID} from "../../utils/base.util";
import {UserEntity} from "../../models/entity/user/user.entity";

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppService<UserEntity, UserPayload> {
  constructor(private http: HttpClient) {
    super(http, AppEndpoint.USER)
  }


  getById = (userId: number): Observable<UserPayload> =>  {
    return this.http.get<UserPayload>(this.urlWithPath(`/id/${userId}`));
  }
  getByPrincipal = (): Observable<UserPayload> => {
    return this.http.get<UserPayload>(this.urlWithPath('/principal'));
  }

  getAllByOrganisation = (): Observable<UserPayload[]> => {
    return this.http.get<UserPayload[]>(this.urlWithPath('/organisation'));
  }

  get = (filter: UserFilter): Observable<UserPayload[]> => {
    let schoolId = DEFAULT_ID;
    if (typeof filter.params.schoolId == 'number') {
      schoolId = filter.params.schoolId < 0 ? schoolId : filter.params.schoolId
    }
    return this.http.get<UserPayload[]>(this.urlWithPath(`/school/${schoolId}/list`),
      {
        params: filter.parameters
      }
    );
  }
}
