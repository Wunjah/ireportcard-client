import {BaseFilter} from "../base.filter";

export interface LaunchFilterParams {
  schoolId?: number
}

export class LaunchFilter extends BaseFilter {
  constructor(
    public params: LaunchFilterParams
  ) {
    super(params);
  }
}
