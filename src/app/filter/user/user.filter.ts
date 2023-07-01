import {Role} from "../../models/base/role.enum";
import {Gender} from "../../models/base/gender.enum";
import {Id} from "../../models/base/base.model";
import {HttpParams} from "@angular/common/http";
import {BaseFilter} from "../base.filter";

export interface UserFilterParams {
  role?: Role
  gender?: Gender
  approved?: boolean
  schoolId?: Id
  organisationId?: Id
}

export class UserFilter extends BaseFilter {
  constructor(public params: UserFilterParams) {
    super(params);
  }
}
