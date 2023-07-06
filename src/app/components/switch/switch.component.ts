import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Role} from "../../models/entity/base/role.enum";
import {SubmitForm} from "../../modules/library/form/components/form/submit.form";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DashboardOption} from "../../app.types";
import {RouterService} from "../../services/general/router.service";

@Component({
  selector: 'app-switch',
  styleUrls: ['./switch.component.css'],
  template: `
    <form class=""  [formGroup]="form">
      <div class="field">
        <p-dropdown
          [options]="dropdownOptions()"
          [optionValue]="'value'"
          [optionLabel]="'value'"
          formControlName="option"
          styleClass="text-base text-color surface-overlay border-1 surface-border w-full">
        </p-dropdown>
      </div>
      <div class="flex gap-1 justify-content-end flex-wrap">
        <p-button  label="Go!" (click)="submit()"></p-button>
        <p-button label="Cancel" styleClass="p-button-danger" (click)="cancelAction()"></p-button>
      </div>
    </form>
  `
})
export class SwitchComponent implements OnInit, SubmitForm {
  form: FormGroup = this._fb.group({ option: ['', Validators.required] });
  dashboardOptions: DashboardOption[] = [];
  @Output() cancelSwitchDialogEvent = new EventEmitter<boolean>();
  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _routerService: RouterService
  ) {}

  dropdownOptions = () => this.dashboardOptions.map(option => ({value: option}));
  ngOnInit() {
    this._userService.getByPrincipal().subscribe(res => {
      this.dashboardOptions = [];
      if (res.account) {
        switch (res.account.role) {
          case Role.ORGANISATION_ADMIN: this.dashboardOptions = ['organisation', 'school']; break;
          case Role.SCHOOL_ADMIN: this.dashboardOptions = ['school']; break;
          case Role.TEACHER: this.dashboardOptions = ['teacher']; break;
          case Role.STUDENT: this.dashboardOptions = ['student']; break;
        }
      }
    });
  }

  submit(): void {
    const option = this.form.get('option')?.value;
    if (option) {
      this.cancelAction();
      this._routerService.switchDashboard(option, true);
    }
  }

  cancelAction() {
    this.form.reset();
    this.cancelSwitchDialogEvent.emit(false);
  }
}
