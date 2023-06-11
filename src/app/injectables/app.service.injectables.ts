import {AuthenticationService} from "../services/authentication/authentication.service";
import {Type} from "@angular/core";
import {AppService} from "../services/base/app.service";
import {LocalStorageService} from "../services/general/local-storage.service";

type AppServiceInjectable = { provide: Type<AppService<any>>, useClass: Type<AppService<any>>}[]

const authenticationServiceInjectables: AppServiceInjectable = [
  {provide: AuthenticationService, useClass: AuthenticationService}
]

const generalServiceInjectables: AppServiceInjectable = [
  {provide: LocalStorageService, useClass: LocalStorageService}
]

export const AppServiceInjectables: AppServiceInjectable[] = [
  authenticationServiceInjectables,
  generalServiceInjectables
]
