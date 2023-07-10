import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StuHomeComponent} from "./components/stu-home/stu-home.component";
import {StuApplicationsComponent} from "./components/stu-applications/stu-applications.component";
import {StuCoursesComponent} from "./components/stu-courses/stu-courses.component";

const routes: Routes = [
  {
    path: '',
    component: StuHomeComponent
  },
  {
    path: 'applications',
    component: StuApplicationsComponent
  },
  {
    path: 'courses',
    component: StuCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {
}
