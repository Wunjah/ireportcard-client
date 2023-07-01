import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchHomeComponent } from './components/sch-home/sch-home.component';
import { SchStudentsComponent } from './components/sch-students/sch-students.component';
import {LibraryModule} from "../../library/library.module";


@NgModule({
  declarations: [
    SchHomeComponent,
    SchStudentsComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    LibraryModule
  ]
})
export class SchoolModule { }
