import {AuthenticationService} from "../services/http/authentication/authentication.service";
import {Type} from "@angular/core";
import {AppService} from "../services/http/base/app.service";

type HttpAppServiceInjectable = { provide: Type<AppService<any, any>>, useClass: Type<AppService<any, any>> }[]

const authenticationServiceInjectables: HttpAppServiceInjectable = [
  {provide: AuthenticationService, useClass: AuthenticationService}
]

const generalServiceInjectables: HttpAppServiceInjectable = []

export const AppServiceInjectables: HttpAppServiceInjectable[] = [
  authenticationServiceInjectables,
  generalServiceInjectables
]
