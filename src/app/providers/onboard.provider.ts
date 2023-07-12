import {Injectable} from "@angular/core";
import {LocalStorageService} from "../services/general/local-storage.service";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: "root"})
export class OnboardProvider {
  private onboardData: OnboardData = { index: 0 };

  private readonly dataSubject = new BehaviorSubject(this.onboardData);
  readonly data$ = this.dataSubject.asObservable();
  constructor(private _localStorage: LocalStorageService) {
  }

  get data() {
    return this.dataSubject.value;
  }

  set data(v: OnboardData) {
    this.dataSubject.next(v);
  }
}

export type OnboardData = {
  index: number,
  formValue?: TeacherOnboardFormValue | StudentOnboardFormValue
}

type StudentOnboardFormValue = {
  address: string;
  email: string;
  fatherName: string;
  fatherPhone?: string;
  firstname: string;
  gender?: string;
  guardianName?: string;
  guardianPhone?: string;
  lastname: string;
  motherName?: string;
  motherPhone?: string;
  password: string;
  password2: string;
  phone: string;
  username: string;
}

type TeacherOnboardFormValue = {

}
