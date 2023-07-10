import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../app.endpoints";
import {AppService} from "../base/app.service";
import {DepartmentEntity} from "../../models/entity/subject/department.entity";
import {DepartmentPayload} from "../../models/payload/department.payload";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends AppService<DepartmentEntity, DepartmentPayload> {
  constructor(private http: HttpClient) {
    super(http, AppEndpoint.DEPARTMENT)
  }
}
