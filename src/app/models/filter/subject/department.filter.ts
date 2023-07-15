import {SchoolBaseFilter, SchoolBaseFilterParams} from "../base.filter";

export interface DepartmentFilterParams extends SchoolBaseFilterParams {
  name?: string
  hodId?: number
}

export class DepartmentFilter extends SchoolBaseFilter {
  constructor(public override params: DepartmentFilterParams, fill: boolean = true) {
    super(params, fill);
  }
}
