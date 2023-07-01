import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SchHomeComponent} from "./components/sch-home/sch-home.component";
import {SchStudentsComponent} from "./components/sch-students/sch-students.component";

const routes: Routes = [
  {
    path: '',
    component: SchHomeComponent
  },
  {
    path: 'students',
    component: SchStudentsComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
