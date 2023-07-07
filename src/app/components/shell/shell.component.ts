import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {RouterService} from "../../services/general/router.service";
import {AppRoute} from "../../app.routes";

@Component({
  selector: 'app-shell',
  styleUrls: ['./shell.component.css'],
  template: `
    <app-header></app-header>
    <app-sidebar
      (switchDialogEvent)="switchDialogEventHandler($event)"
      (logoutEvent)="logoutEventHandler()"></app-sidebar>
    <app-main>
      <router-outlet></router-outlet>
    </app-main>
    <app-footer></app-footer>
    <p-dialog header="Switch Dashboard" [modal]="true" [(visible)]="switchDialogVisible" [style]="{width: '50vw', height: '30vw'}">
      <app-switch (cancelSwitchDialogEvent)="switchDialogEventHandler($event)"></app-switch>
    </p-dialog>
  `
})
export class ShellComponent {
  constructor(
    private _authService: AuthenticationService,
    private _routerService: RouterService
  ) {
  }

  switchDialogVisible: boolean = false;

  switchDialogEventHandler($event: boolean) {
    this.switchDialogVisible = $event;
  }

  logoutEventHandler = () => {
    this._authService.logout();
    this._routerService.nav([AppRoute.AUTH_LOGIN.path]);
  }
}
