import {DepartmentEntity} from "../entity/subject/department.entity";
import {UserAccountEntity} from "../entity/user/user-account.entity";

export interface DepartmentPayload {
  department: DepartmentEntity,
  hod: UserAccountEntity
}
