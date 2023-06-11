import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {LibraryModule} from "../../library/library.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    LibraryModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
