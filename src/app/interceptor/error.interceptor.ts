import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => this.errorResponseHandler(error))
    );
  }

  private errorResponseHandler = (response?: HttpErrorResponse | null) => {
    if (response != null && response.hasOwnProperty('error') && response.error.hasOwnProperty('message')) {
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
