import {UserAccountModel} from "./user-account.model";
import {UserEntity} from "./user.entity";

export class UserPayload {
  constructor(
    public user: UserEntity,
    public account?: UserAccountModel
  ) {
  }
}
