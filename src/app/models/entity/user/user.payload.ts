import {UserAccountEntity} from "./user-account.entity";
import {UserEntity} from "./user.entity";
import {Gender} from "../base/gender.enum";
import {Role} from "../base/role.enum";

export class UserPayload {
  constructor(
    public user: UserEntity,
    public account?: UserAccountEntity
  ) {
  }

  static form(form: UserPayloadForm, role: Role = Role.USER) {
    const user = new UserEntity(
      form.username,
      form.email,
      form.firstname,
      form.lastname,
      undefined,
      form.approved,
      form.phone,
      form.address
    );

    const account = new UserAccountEntity(
      '',
      form.gender,
      role,
      undefined,
      form.schoolId,
      form.organisationId
    );

    return new UserPayload(user, account);
  }
}

interface UserPayloadForm {
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  approved?: boolean;
  phone?: string;
  address?: string;
  gender: Gender;
  schoolId?: number;
  organisationId?: number;
}
