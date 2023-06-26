import {BaseModel} from "../base/base.model";

export class UserModel extends BaseModel {
  constructor(
    public username: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public accountId?: number,
    public approved?: boolean,
    public phone?: string,
    public address?: string,
  ) {
    super();
  }
}
