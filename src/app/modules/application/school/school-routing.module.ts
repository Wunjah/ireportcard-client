import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SchHomeComponent} from "./components/sch-home/sch-home.component";
import {SchStudentsComponent} from "./components/sch-students/sch-students.component";
import {SchCoursesComponent} from "./components/sch-courses/sch-courses.component";
import {SchClassesComponent} from "./components/sch-classes/sch-classes.component";
import {SchStudentsAddComponent} from "./components/sch-students-add/sch-students-add.component";
import {SchTeachersComponent} from "./components/sch-teachers/sch-teachers.component";
import {SchTeachersAddComponent} from "./components/sch-teachers-add/sch-teachers-add.component";
import {SchDepartmentsComponent} from "./components/sch-departments/sch-departments.component";
import {SchDepartmentsViewComponent} from "./components/sch-departments-view/sch-departments-view.component";
import {SchSettingsComponent} from "./components/sch-settings/sch-settings.component";

const routes: Routes = [
  {
    path: '',
    component: SchHomeComponent
  },
  {
    path: 'students',
    children: [
      {
        path: '',
        component: SchStudentsComponent
      },
      {
        path: 'add',
        component: SchStudentsAddComponent
      }
    ]
  }, {
    path: 'teachers',
    children: [
      {
        path: '',
        component: SchTeachersComponent
      },
      {
        path: 'add',
        component: SchTeachersAddComponent
      }
    ]
  },
  {
    path: 'departments',
    children: [
      {
        path: '',
        component: SchDepartmentsComponent,
      },
      {
        path: 'add',
        component: SchStudentsAddComponent
      },
      {
        path: 'view',
        component: SchDepartmentsViewComponent
      }
    ]
  },
  {
    path: 'classes',
    component: SchClassesComponent,
  },
  {
    path: 'courses',
    component: SchCoursesComponent
  },
  {
    path: 'settings',
    component: SchSettingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule {
}
