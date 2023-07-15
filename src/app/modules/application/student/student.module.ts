import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudentRoutingModule} from './student-routing.module';
import {StuCoursesComponent} from './components/stu-courses/stu-courses.component';
import {StuHomeComponent} from './components/stu-home/stu-home.component';
import {StuApplicationsComponent} from './components/stu-applications/stu-applications.component';
import {LibraryModule} from "../../library/library.module";


@NgModule({
  declarations: [
    StuCoursesComponent,
    StuHomeComponent,
    StuApplicationsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    LibraryModule
  ]
})
export class StudentModule {
}
