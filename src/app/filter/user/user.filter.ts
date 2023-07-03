import {Role} from "../../models/entity/base/role.enum";
import {Gender} from "../../models/entity/base/gender.enum";
import {Id} from "../../models/entity/base/base.entity";
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
