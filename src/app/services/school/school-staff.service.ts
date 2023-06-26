import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {AppEndpoint, AppEndpoints} from "../../app.endpoints";
import {HttpClient} from "@angular/common/http";
import {SchoolStaffPayload} from "../../models/payload/school-staff.payload";
import {Observable} from "rxjs";
import {Id} from "../../models/base/base.model";

@Injectable({
  providedIn: 'root'
})
export class SchoolStaffService extends AppService<any> {


  constructor(private http: HttpClient) {
    super(AppEndpoint.SCHOOL_STAFF);
  }

  getPayloadBySchoolId = (schoolId: Id): Observable<SchoolStaffPayload> => {
    console.log(this.urlWithPath(`/school/${schoolId}`))
    return this.http.get<SchoolStaffPayload>(this.urlWithPath(`/school/${schoolId}`))
  }
}
