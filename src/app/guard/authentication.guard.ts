import {CanActivateFn} from '@angular/router';
import {AuthenticationService} from "../services/authentication/authentication.service";
import {inject} from "@angular/core";
import {LocalStorageService} from "../services/general/local-storage.service";
import {RouterService} from "../services/general/router.service";
import {AppRoute} from "../app.routes";
import {Subject} from "rxjs";

export const authenticationGuard: CanActivateFn = (route, state) => {
  return true;
  const routerService: RouterService = inject(RouterService);
  const localStorage: LocalStorageService = inject(LocalStorageService);
  if (localStorage.get("access_token") == undefined) {
    routerService.nav([AppRoute.AUTH_LOGIN.path]);
    return false;
  }
  const response = new Subject<boolean>();
  const authService: AuthenticationService = inject(AuthenticationService);
  authService.isAuthenticated().subscribe({
    next: value => response.next(value),
    error: () => {
      response.next(false);
      routerService.nav([AppRoute.AUTH_LOGIN.path]);
    },
    complete: () => response.complete()
  });
  return response.asObservable();
};
