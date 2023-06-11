import {Component, Input} from '@angular/core';
import {FormControlModel} from "../../models/form/form-control.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input()
  controls: FormControlModel[] = [];
}
