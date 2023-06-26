import {Gender} from "../base/gender.enum";
import {UserRole} from "../base/role.enum";
import {BaseModel} from "../base/base.model";

export class UserAccountModel extends BaseModel {
  constructor(
    public accountId: string = "",
    public gender: Gender,
    public role: UserRole,
    public userId?: number,
    public schoolId?: number,
    public organisationId?: number
  ) {
    super();
  }
}
