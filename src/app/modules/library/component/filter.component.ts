import {FormModel} from "../form/models/form/form.model";
import {TableModel} from "../crud/models/table.model";
import {BaseFilter} from "../../../filter/base.filter";

export interface FilterComponent {
  table?: TableModel;
  filter: BaseFilter;
  filterForm: FormModel;

  filterAction($event: any): void
}
