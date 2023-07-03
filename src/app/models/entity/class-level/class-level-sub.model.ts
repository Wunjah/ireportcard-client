import {DeletableEntity} from "../base/base.entity";

export class ClassLevelSubModel extends DeletableEntity {
  constructor(
    public classLevelId: number,
    public name: string,
  ) {
    super();
  }
}
