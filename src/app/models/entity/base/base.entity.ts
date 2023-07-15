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

export const isValidId = (id?: Id | null) => {
  if (typeof id == "undefined") {
    return false;
  }
  if (typeof id == null) {
    return false;
  }
  if (typeof id == "number" || typeof id == "string") {
    return true;
  }
  return false;
}
