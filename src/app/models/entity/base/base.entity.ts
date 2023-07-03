export abstract class BaseEntity {
  protected constructor(
    public id?: Id,
    public createdAt?: Date,
    public updatedAt?: Date,
  ) {
  }
}

export abstract class DeletableEntity extends BaseEntity {
  protected constructor(
    public deletedAt?: Date
  ) {
    super();
  }
}

export type Id = number | string
