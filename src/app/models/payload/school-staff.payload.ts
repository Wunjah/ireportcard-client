import {SchoolEntity} from "../entity/school/school.entity";
import {UserAccountEntity} from "../entity/user/user-account.entity";

export interface SchoolStaffPayload {
  school: SchoolEntity
  staff: UserAccountEntity[]
}
