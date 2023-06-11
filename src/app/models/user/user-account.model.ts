import {Gender} from "../base/gender.enum";
import {UserRole} from "../base/role.enum";

export class UserAccountModel {
  constructor(
    public accountId: string,
    public gender: Gender,
    public role: UserRole,
    public userId: number,
    public schoolId?: number,
    public organisationId?: number
  ) {}
}
