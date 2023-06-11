export class UserModel {
  constructor(
    public id: number,
    public username: string,
    public email: string,
    public firstname: string,
    public lastname: string,
    public approved: boolean,
    public accountId: number,
    public phone?: string,
    public address?: string,
  ) {}
}
