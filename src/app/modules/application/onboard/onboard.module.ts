import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardRoutingModule } from './onboard-routing.module';
import { StudentOnboardComponent } from './component/student-onboard/student-onboard.component';


@NgModule({
  declarations: [
    StudentOnboardComponent
  ],
  imports: [
    CommonModule,
    OnboardRoutingModule
  ]
})
export class OnboardModule { }
