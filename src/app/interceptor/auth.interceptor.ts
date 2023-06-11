import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LocalStorageService} from "../services/general/local-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorageService: LocalStorageService,
  ) {}
  private readonly excludedPaths = [
    "/auth/login",
    "/auth/register"
  ]

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.localStorageService.get('access_token');

    if (this.isExcluded(request.url) || accessToken == null) {
      return next.handle(request);
    }

    const modifiedRequest = this.addAccessToken(request, accessToken);
    return next.handle(modifiedRequest);
  }

  private isExcluded(url: string) {
    return this.excludedPaths.some((path) => url.endsWith(path));
  }

  private addAccessToken(request: HttpRequest<unknown>, accessToken: string) : HttpRequest<unknown> {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
    })
  }
}
