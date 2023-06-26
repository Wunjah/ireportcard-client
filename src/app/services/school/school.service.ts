import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AppService} from "../base/app.service";
import {AppEndpoint} from "../../app.endpoints";
import {SchoolModel} from "../../models/school/school.model";
import {ApiPayload} from "../../models/base/payload.model";

@Injectable({
  providedIn: 'root'
})
export class SchoolService extends AppService<any> {
  constructor(private http: HttpClient) {
    super(AppEndpoint.SCHOOL);
  }

  create = (school: SchoolModel): Observable<ApiPayload> => {
    return this.http.post<ApiPayload>(this.url, school)
  }

  getById = (id: number): Observable<SchoolModel> => {
    return this.http.get<SchoolModel>(this.urlWithPath(`/${id}`));
  }

  getAllByOrganisation = (organisationId: number): Observable<SchoolModel[]> => {
    return this.http.get<SchoolModel[]>(this.urlWithPath(`/organisation/${organisationId}`));
  }
}
