import {Type} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorInterceptor} from "../interceptor/error.interceptor";
import {AuthInterceptor} from "../interceptor/auth.interceptor";

const interceptorInjectable = (interceptorType: Type<any>) => {
  return {provide: HTTP_INTERCEPTORS, useClass: interceptorType, multi: true}
}

export const AuthInterceptorInjectable = interceptorInjectable(AuthInterceptor)
export const ErrorInterceptorInjectable = interceptorInjectable(ErrorInterceptor)
