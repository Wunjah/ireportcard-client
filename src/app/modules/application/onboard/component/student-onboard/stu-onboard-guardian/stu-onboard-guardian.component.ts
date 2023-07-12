import {Component, OnInit} from '@angular/core';
import {OnboardProvider} from "../../../../../../providers/onboard.provider";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RouterService} from "../../../../../../services/general/router.service";
import {IOnboard} from "../../../onboard.interface";

@Component({
  selector: 'app-stu-onboard-guardian',
  templateUrl: './stu-onboard-guardian.component.html',
  styleUrls: ['./stu-onboard-guardian.component.css']
})
export class StuOnboardGuardianComponent implements OnInit, IOnboard {
  form: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _provider: OnboardProvider,
    private _routerService: RouterService
  ) {
    this.form = this._fb.group({
      fatherName: [],
      fatherPhone: [],
      motherName: [],
      motherPhone: [],
      guardianName: [],
      guardianPhone: [],
    });
  }

  ngOnInit() {

  }

  nextPageAction = () => {
    this._routerService.nav(['/onboard/student/class'], undefined, () => {
      this._provider.data = {
        index: ++this._provider.data.index,
        formValue: {
          ...this._provider.data.formValue,
          ...this.form.value
        }
      }
    });
  }
}
