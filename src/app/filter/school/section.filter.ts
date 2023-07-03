import {SchoolBaseFilter, SchoolBaseFilterParams} from "../base.filter";

export interface SectionFilterParams extends SchoolBaseFilterParams {
  name: string
}

export class SectionFilter extends SchoolBaseFilter {
  constructor(public override params: SectionFilterParams) {
    super(params);
  }
}
