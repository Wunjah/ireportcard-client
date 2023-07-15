import {BaseEntity, Id} from "../base/base.entity";

export class DepartmentEntity extends BaseEntity {
  constructor(
    public name: string,
    public schoolId: Id,
    public hodId?: Id,
  ) {
    super();
  }
}
