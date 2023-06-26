import {SchoolModel} from "../school/school.model";
import {UserAccountModel} from "../user/user-account.model";

export interface SchoolStaffPayload {
  school: SchoolModel
  staff: UserAccountModel[]
}
