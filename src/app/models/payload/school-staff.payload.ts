import {SchoolEntity} from "../entity/school/school.entity";
import {UserAccountModel} from "../entity/user/user-account.model";

export interface SchoolStaffPayload {
  school: SchoolEntity
  staff: UserAccountModel[]
}
