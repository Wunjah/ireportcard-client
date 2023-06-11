import {HttpClient} from "@angular/common/http";
import {AppEndpoints} from "../../app.endpoints";

export interface IAppService<T> {

}

export class AppService<T> implements IAppService<T> {
  constructor(private endpointUrl?: string, private httpClient?: HttpClient) {
  }

  endpoint = (path: string) => {
    console.log(`${AppEndpoints.base}`)
    return `${AppEndpoints.base}${path}`
  }
}
