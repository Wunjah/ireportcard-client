import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/components/header/header.component';
import { SidebarComponent } from './navigation/components/sidebar/sidebar.component';
import { MainComponent } from './navigation/components/main/main.component';
import { FooterComponent } from './navigation/components/footer/footer.component';
import { InputComponent } from './form/components/input/input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/components/form/form.component';
import { AvatarComponent } from './user/components/avatar/avatar.component';



@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        MainComponent,
        FooterComponent,
        InputComponent,
        FormComponent,
        AvatarComponent
    ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    InputComponent,
    AvatarComponent
  ],
    imports: [
        CommonModule,
      ReactiveFormsModule
    ]
})
export class LibraryModule { }
