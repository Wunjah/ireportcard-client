import {Component, Input} from '@angular/core';
import {TableModel} from "../../models/table.model";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  @Input()
  table: TableModel = {
    title: "",
    header: {cells: []},
    rows: []
  };
}
