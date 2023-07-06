import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../app.endpoints";
import {Injectable} from "@angular/core";
import {BaseFilter} from "../../models/filter/base.filter";
import {Observable} from "rxjs";

export interface IAppService<T> {
}


@Injectable({
  providedIn: 'root'
})
export abstract class AppService<Entity, Payload> implements IAppService<Entity> {
  protected readonly url: string;

  protected constructor(private httpClient: HttpClient, private endpoint?: AppEndpoint) {
    this.url = endpoint?.url ?? "";
  }

  urlWithPath = (path: string) => {
    return `${this.url}${path}`
  }

  list = (filter: BaseFilter): Observable<Payload[]> => this.httpClient.get<Payload[]>(this.urlWithPath("/list"), {
    params: filter.parameters
  })
}
