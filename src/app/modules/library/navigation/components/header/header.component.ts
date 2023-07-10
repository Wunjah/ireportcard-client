import {Component, Input} from '@angular/core';
import {UserPayload} from "../../../../../models/entity/user/user.payload";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  userPayload?: UserPayload | undefined;

  toggleSidebarAction() {
    document.body.classList.toggle("toggle-sidebar");
  }
}
