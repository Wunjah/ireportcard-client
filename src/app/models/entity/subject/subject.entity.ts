import {BaseEntity} from "../base/base.entity";

export class SubjectEntity extends BaseEntity {
  constructor(
    public code: string,
    public coefficient: number,
    public name: string,
    public departmentId: number
  ) {
    super();
  }
}
