import {DeletableEntity} from "../base/base.entity";

export class ClassLevelModel extends DeletableEntity {
  constructor(
    public name: string,
    public order: number,
    public sectionId: number
  ) {
    super();
  }
}
