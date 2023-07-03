import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppRoute, AppRoutes} from "../../../../../app.routes";
import {LoginRequest} from "../../../../../models/entity/authentication/login.model";
import {AuthenticationService} from "../../../../../services/authentication/authentication.service";
import {LocalStorageService} from "../../../../../services/general/local-storage.service";
import {RouterService} from "../../../../../services/general/router.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  protected readonly AppRoutes = AppRoutes;
  protected readonly AppRoute = AppRoute;

  constructor(
    private _fb: FormBuilder,
    private _routerService: RouterService,
    private _localStorageService: LocalStorageService,
    private _authenticationService: AuthenticationService
  ) {
    this.loginForm = _fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  loginFormAction() {
    const loginRequest: LoginRequest = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    }
    this._authenticationService.login(loginRequest).subscribe((res) => {
      this._localStorageService.set('access_token', res.token);
      this._routerService.nav([AppRoute.APP_USER_PROFILE]);
    });
  }
}
