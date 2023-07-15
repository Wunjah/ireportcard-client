import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../base/app.service";
import {AppEndpoint} from "../../../app.endpoints";
import {SchoolEntity} from "../../../models/entity/school/school.entity";
import {ApiPayload} from "../../../models/entity/base/payload.model";

@Injectable({
  providedIn: 'root'
})
export class SchoolService extends AppService<SchoolEntity, any> {
  constructor(private http: HttpClient) {
    super(http, AppEndpoint.SCHOOL);
  }

  create = (school: SchoolEntity): Observable<ApiPayload> => {
    return this.http.post<ApiPayload>(this.url, school)
  }

  getById = (id: number): Observable<SchoolEntity> => {
    return this.http.get<SchoolEntity>(this.urlWithPath(`/${id}`));
  }

  getAllByOrganisation = (organisationId: number): Observable<SchoolEntity[]> => {
    return this.http.get<SchoolEntity[]>(this.urlWithPath(`/organisation/${organisationId}`));
  }
}
