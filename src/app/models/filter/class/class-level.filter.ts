import {SchoolBaseFilter} from "../base.filter";

interface ClassLevelFilterParams {
  schoolId: number
  organisationId: number
  sectionId?: number
  name?: string
}

export class ClassLevelFilter extends SchoolBaseFilter {
  constructor(params: ClassLevelFilterParams, fill: boolean = true) {
    super(params, fill);
  }
}
