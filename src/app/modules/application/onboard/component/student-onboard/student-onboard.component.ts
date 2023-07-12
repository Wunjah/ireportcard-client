import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";
import {OnboardProvider} from "../../../../../providers/onboard.provider";

@Component({
  selector: 'app-student-onboard',
  templateUrl: './student-onboard.component.html',
  styleUrls: ['./student-onboard.component.css']
})
export class StudentOnboardComponent {
  items: MenuItem[] = [];

  constructor(private _provider: OnboardProvider) {
    this.items = [
      {
        label: 'Personal',
        routerLink: '/onboard/student/personal'
      },
      {
        label: 'Guardian',
        routerLink: 'guardian'
      },
      {
        label: 'Class',
        routerLink: 'class'
      },
      {
        label: 'Payment',
        routerLink: 'payment'
      },
      {
        label: 'Confirmation',
        routerLink: 'confirmation'
      },
    ];
  }

  onboardData$ = () => {
    return this._provider.data$
  }
}
