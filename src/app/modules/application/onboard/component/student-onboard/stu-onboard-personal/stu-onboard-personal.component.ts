import {Component, OnInit} from '@angular/core';
import {genderOptions} from "../../../../../../models/entity/base/gender.enum";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OnboardProvider} from "../../../../../../providers/onboard.provider";
import {RouterService} from "../../../../../../services/general/router.service";

@Component({
  selector: 'app-stu-onboard-personal',
  templateUrl: './stu-onboard-personal.component.html',
  styleUrls: ['./stu-onboard-personal.component.css']
})
export class StuOnboardPersonalComponent implements OnInit {

  form: FormGroup;
  protected readonly genderOptions = genderOptions;

  constructor(
    private _fb: FormBuilder,
    private _provider: OnboardProvider,
    private _routerService: RouterService
  ) {
    this.form = _fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: [''],
      address: [''],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  nextPageAction() {
    this._routerService.nav(['/onboard/student/guardian'], undefined, () => {
      this._provider.data = {
        index: 1,
        formValue: this.form.value
      }
    });
  }
}
