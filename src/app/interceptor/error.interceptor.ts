import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, EMPTY, Observable, throwError} from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => this.errorResponseHandler(error))
    );
  }

  private errorResponseHandler = (response: HttpErrorResponse) => {
    if (response.hasOwnProperty('error') && response.error.hasOwnProperty('message')) {
      const apiError = response.error as ApiError
      console.error(`${response.status}: ${apiError.message}`)
    }
    return throwError(() => response)
  }
}

class ApiError {
  constructor(
    public message: string,
    public messageCode: string,
    public path: string,
    public timestamp: string,
    public error: {}
  ) {
  }
}
