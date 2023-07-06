import {Injectable} from '@angular/core';
import {AppService} from "../base/app.service";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../app.endpoints";
import {Observable} from "rxjs";
import {ClassLevelPayload} from "../../models/payload/class-level.payload";
import {ClassLevelFilter} from "../../models/filter/class/class-level.filter";
import {ClassLevelModel} from "../../models/entity/class-level/class-level.model";

@Injectable({
  providedIn: 'root'
})
export class ClassLevelService extends AppService<ClassLevelModel, ClassLevelPayload> {

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.CLASS_LEVEL)
  }

  get = (filter: ClassLevelFilter): Observable<ClassLevelPayload[]> => this.http.get<ClassLevelPayload[]>(
    this.urlWithPath("/list"),
    {
      params: filter.parameters
    }
  )
}
