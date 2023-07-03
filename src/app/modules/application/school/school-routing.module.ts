import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SchHomeComponent} from "./components/sch-home/sch-home.component";
import {SchStudentsComponent} from "./components/sch-students/sch-students.component";
import {SchCoursesComponent} from "./components/sch-courses/sch-courses.component";
import {SchClassesComponent} from "./components/sch-classes/sch-classes.component";

const routes: Routes = [
  {
    path: '',
    component: SchHomeComponent
  },
  {
    path: 'students',
    component: SchStudentsComponent,
    children: []
  },
  {
    path: 'classes',
    component: SchClassesComponent,
  },
  {
    path: 'courses',
    component: SchCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule {
}
