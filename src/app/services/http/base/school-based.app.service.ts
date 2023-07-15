import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";
import {AppService} from "./app.service";
import {SchoolId} from "../../general/local-storage.service";

@Injectable({
  providedIn: 'root'
})
export abstract class SchoolBasedAppService<Entity, Payload> extends AppService<Entity, Payload> {
  protected constructor(http: HttpClient, endpoint?: AppEndpoint) {
    super(http, endpoint, `/school/${SchoolId()}`)
  }
}
