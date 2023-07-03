import {BaseFilter} from "../base.filter";

interface ClassLevelFilterParams {
  schoolId: number
  organisationId: number
  sectionId?: number
  name?: string
}

export class ClassLevelFilter extends BaseFilter {
  constructor(params: ClassLevelFilterParams) {
    super(params);
  }
}
