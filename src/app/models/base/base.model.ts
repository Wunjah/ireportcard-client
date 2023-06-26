export abstract class BaseModel {
  protected constructor(
    public id?: Id,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {
  }
}

export type Id = number | string

