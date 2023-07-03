import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AccessToken} from "../services/general/local-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private readonly excludedPaths = [
    "/auth/login",
    "/auth/register"
  ]

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = AccessToken

    if (this.isExcluded(request.url) || accessToken == null) {
      return next.handle(request);
    }

    const modifiedRequest = this.addAccessToken(request, accessToken);
    return next.handle(modifiedRequest);
  }

  private isExcluded(url: string) {
    return this.excludedPaths.some((path) => url.endsWith(path));
  }

  private addAccessToken(request: HttpRequest<unknown>, accessToken: string): HttpRequest<unknown> {
    return request.clone({
      headers: request.headers.set('Authorization', `Bearer ${accessToken}`)
    })
  }
}
