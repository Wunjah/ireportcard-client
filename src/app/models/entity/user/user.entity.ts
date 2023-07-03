import {BaseEntity} from "../base/base.entity";

export class UserEntity extends BaseEntity {
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
