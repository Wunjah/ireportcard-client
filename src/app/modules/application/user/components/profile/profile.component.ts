import {Component, OnInit} from '@angular/core';
import {UserPayload} from "../../../../../models/entity/user/user.payload";
import {UserService} from "../../../../../services/user/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userPayload?: UserPayload;
  fullName: string = "";
  editProfileForm: FormGroup = this._fb.group({});

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService
  ) {
    this._userService.getByPrincipal().subscribe(res => {
      this.userPayload = res;
      this.fullName = `${res.user.firstname} ${res.user.lastname}`
      this.prepareEditProfileForm(res);
    });

  }

  ngOnInit(): void {

  }

  private prepareEditProfileForm = (userPayload: UserPayload) => {
    this.editProfileForm = this._fb.group({
      firstname: [userPayload.user.firstname],
      lastname: [userPayload.user.lastname],
      address: [userPayload.user.address],
      phone: [userPayload.user.phone],
      email: [userPayload.user.email],
    })
  }

}
