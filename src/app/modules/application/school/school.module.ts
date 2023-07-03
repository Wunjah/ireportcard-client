import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SchoolRoutingModule} from './school-routing.module';
import {SchHomeComponent} from './components/sch-home/sch-home.component';
import {SchStudentsComponent} from './components/sch-students/sch-students.component';
import {LibraryModule} from "../../library/library.module";
import {SchClassesComponent} from './components/sch-classes/sch-classes.component';
import {SchCoursesComponent} from './components/sch-courses/sch-courses.component';


@NgModule({
  declarations: [
    SchHomeComponent,
    SchStudentsComponent,
    SchClassesComponent,
    SchCoursesComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    LibraryModule
  ]
})
export class SchoolModule {
}
