import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OnboardRoutingModule} from './onboard-routing.module';
import {StudentOnboardComponent} from './component/student-onboard/student-onboard.component';
import {TeacherOnboardComponent} from './component/teacher-onboard/teacher-onboard.component';
import {LibraryModule} from "../../library/library.module";
import {
  StuOnboardPersonalComponent
} from './component/student-onboard/stu-onboard-personal/stu-onboard-personal.component';
import {
  StuOnboardGuardianComponent
} from './component/student-onboard/stu-onboard-guardian/stu-onboard-guardian.component';
import {StuOnboardClassComponent} from './component/student-onboard/stu-onboard-class/stu-onboard-class.component';
import {
  StuOnboardPaymentComponent
} from './component/student-onboard/stu-onboard-payment/stu-onboard-payment.component';
import {
  StuOnboardConfirmationComponent
} from './component/student-onboard/stu-onboard-confirmation/stu-onboard-confirmation.component';
import {PasswordModule} from "primeng/password";


@NgModule({
  declarations: [
    StudentOnboardComponent,
    TeacherOnboardComponent,
    StuOnboardPersonalComponent,
    StuOnboardGuardianComponent,
    StuOnboardClassComponent,
    StuOnboardPaymentComponent,
    StuOnboardConfirmationComponent
  ],
  imports: [
    CommonModule,
    OnboardRoutingModule,
    LibraryModule,
    PasswordModule
  ]
})
export class OnboardModule {
}
