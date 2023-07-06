import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './navigation/components/header/header.component';
import {SidebarComponent} from './navigation/components/sidebar/sidebar.component';
import {MainComponent} from './navigation/components/main/main.component';
import {FooterComponent} from './navigation/components/footer/footer.component';
import {InputComponent} from './form/components/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from './form/components/form/form.component';
import {AvatarComponent} from './user/components/avatar/avatar.component';
import {RouterLink} from "@angular/router";
import {TableComponent} from './crud/components/table/table.component';
import {DatatableComponent} from './crud/components/datatable/datatable.component';
import {AdminRegisterFormComponent} from './form/components/admin-register-form/admin-register-form.component';
import {SchoolAddFormComponent} from './form/components/school-add-form/school-add-form.component';
import {
  AdminAssignSchoolFormComponent
} from './form/components/admin-assign-school-form/admin-assign-school-form.component';
import {DatafilterComponent} from './crud/components/datafilter/datafilter.component';
import { ModalComponent } from './modal/modal/modal.component';
import {DialogModule} from "primeng/dialog";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    InputComponent,
    FormComponent,
    AvatarComponent,
    TableComponent,
    DatatableComponent,
    AdminRegisterFormComponent,
    SchoolAddFormComponent,
    AdminAssignSchoolFormComponent,
    DatafilterComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    InputComponent,
    AvatarComponent,
    DatatableComponent,
    AdminRegisterFormComponent,
    SchoolAddFormComponent,
    DatafilterComponent,
    CardModule,
    ButtonModule,
    DropdownModule,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterLink,
        DialogModule,
      CardModule,
      ButtonModule,
      DropdownModule,
    ]
})
export class LibraryModule {
}
