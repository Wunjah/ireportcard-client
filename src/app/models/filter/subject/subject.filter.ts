import {SchoolBaseFilter, SchoolBaseFilterParams} from "../base.filter";
import {OrganisationId, SchoolId} from "../../../services/general/local-storage.service";

export interface SubjectFilterParams extends SchoolBaseFilterParams{
  name?: string
  hodId?: number
}

export class SubjectFilter extends SchoolBaseFilter {
  constructor(public override params: SubjectFilterParams, fill: boolean = true) {
    super(params, fill);
  }
}
