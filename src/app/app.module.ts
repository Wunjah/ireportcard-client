import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./modules/shared.module";
import {AppRoutingModule} from "./app-routing.module";
import {AppServiceInjectables} from "./injectables/app.service.injectables";
import {HttpClientModule} from "@angular/common/http";
import {AuthInterceptorInjectable, ErrorInterceptorInjectable} from "./injectables/app.interceptor.injectables";
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    AppServiceInjectables,
    AuthInterceptorInjectable,
    ErrorInterceptorInjectable,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
