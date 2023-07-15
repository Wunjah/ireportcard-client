import {Injectable} from '@angular/core';
import {AppService} from "../base/app.service";
import {AppEndpoint} from "../../../app.endpoints";
import {HttpClient} from "@angular/common/http";
import {SectionPayload} from "../../../models/payload/section.payload";
import {SectionEntity} from "../../../models/entity/school/section.entity";

@Injectable({
  providedIn: 'root'
})
export class SectionService extends AppService<SectionEntity, SectionPayload> {
  constructor(private http: HttpClient) {
    super(http, AppEndpoint.SECTION);
  }

}
