import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentOnboardComponent} from "./component/student-onboard/student-onboard.component";
import {TeacherOnboardComponent} from "./component/teacher-onboard/teacher-onboard.component";
import {
  StuOnboardPersonalComponent
} from "./component/student-onboard/stu-onboard-personal/stu-onboard-personal.component";
import {
  StuOnboardGuardianComponent
} from "./component/student-onboard/stu-onboard-guardian/stu-onboard-guardian.component";
import {StuOnboardClassComponent} from "./component/student-onboard/stu-onboard-class/stu-onboard-class.component";
import {
  StuOnboardConfirmationComponent
} from "./component/student-onboard/stu-onboard-confirmation/stu-onboard-confirmation.component";

const routes: Routes = [
  {
    path: 'student',
    component: StudentOnboardComponent,
    children: [
      {
        path: 'personal',
        component: StuOnboardPersonalComponent,
      },
      {
        path: 'guardian',
        component: StuOnboardGuardianComponent,
      },
      {
        path: 'class',
        component: StuOnboardClassComponent,
      },
      {
        path: 'payment',
        component: StuOnboardConfirmationComponent,
      },
      {
        path: 'confirmation',
        component: StuOnboardConfirmationComponent,
      },
    ]
  },
  {
    path: 'teacher/:invitationId',
    component: TeacherOnboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardRoutingModule {
}
