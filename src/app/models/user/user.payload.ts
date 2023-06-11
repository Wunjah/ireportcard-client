import {UserAccountModel} from "./user-account.model";
import {UserModel} from "./user.model";

export class UserPayload {
  constructor(
    public user: UserModel,
    public account?: UserAccountModel
  ) {}
}
