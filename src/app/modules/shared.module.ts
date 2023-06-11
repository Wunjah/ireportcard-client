import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LibraryModule} from "./library/library.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibraryModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    LibraryModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
