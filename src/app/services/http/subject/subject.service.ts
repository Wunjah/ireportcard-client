import {Injectable} from '@angular/core';
import {AppService} from "../base/app.service";
import {SubjectEntity} from "../../../models/entity/subject/subject.entity";
import {SubjectPayload} from "../../../models/payload/subject.payload";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";

@Injectable({
  providedIn: 'root'
})
export class SubjectService extends AppService<SubjectEntity, SubjectPayload> {
  constructor(private http: HttpClient) {
    super(http, AppEndpoint.SUBJECT)
  }
}
