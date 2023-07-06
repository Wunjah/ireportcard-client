import {Component} from '@angular/core';

@Component({
  selector: 'app-shell',
  styleUrls: ['./shell.component.css'],
  template: `
    <app-header></app-header>
    <app-sidebar (switchDialogEvent)="switchDialogEventHandler($event)"></app-sidebar>
    <app-main>
      <router-outlet></router-outlet>
    </app-main>
    <app-footer></app-footer>
    <p-dialog header="Switch Dashboard" [modal]="true" [(visible)]="switchDialogVisible" [style]="{width: '50vw', height: '16vw'}">
      <app-switch (cancelSwitchDialogEvent)="switchDialogEventHandler($event)"></app-switch>
    </p-dialog>
  `
})
export class ShellComponent {

  switchDialogVisible: boolean = false;

  switchDialogEventHandler($event: boolean) {
    this.switchDialogVisible = $event;
  }
}
