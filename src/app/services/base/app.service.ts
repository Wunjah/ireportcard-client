import {HttpClient} from "@angular/common/http";
import {AppEndpoint, AppEndpoints} from "../../app.endpoints";
import {Component} from "@angular/core";

export interface IAppService<T> {
}

export abstract class AppService<T> implements IAppService<T> {
  protected readonly url: string;
  protected constructor(private endpoint?: AppEndpoint, private httpClient?: HttpClient) {
    this.url = endpoint?.url ?? "";
  }

  urlWithPath = (path: string) => {
    return `${this.url}${path}`
  }
}
