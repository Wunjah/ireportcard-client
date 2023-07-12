import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/http/authentication/authentication.service";
import {RouterService} from "../../services/general/router.service";
import {UserService} from "../../services/http/user/user.service";
import {UserPayload} from "../../models/entity/user/user.payload";

@Component({
  selector: 'app-shell',
  styleUrls: ['./shell.component.css'],
  template: `
    <app-header [userPayload]="userPayload"></app-header>
    <app-sidebar
      (switchDialogEvent)="switchDialogEventHandler($event)"
      (logoutEvent)="logoutEventHandler()"></app-sidebar>
    <app-main>
      <router-outlet></router-outlet>
    </app-main>
    <app-footer></app-footer>
    <p-dialog header="Switch Dashboard" [modal]="true" [(visible)]="switchDialogVisible"
              [style]="{width: '50vw', height: '30vw'}">
      <app-switch (cancelSwitchDialogEvent)="switchDialogEventHandler($event)"></app-switch>
    </p-dialog>
  `
})
export class ShellComponent implements OnInit {
  userPayload?: UserPayload;
  switchDialogVisible: boolean = false;

  constructor(
    private _authService: AuthenticationService,
    private _userService: UserService,
    private _routerService: RouterService
  ) {
  }

  ngOnInit() {
    this._userService.getByPrincipal().subscribe(res => this.userPayload = res);
  }

  switchDialogEventHandler($event: boolean) {
    this.switchDialogVisible = $event;
  }

  logoutEventHandler = () => {
    this._authService.logout();
  }
}
