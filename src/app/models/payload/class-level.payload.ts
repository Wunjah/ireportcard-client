import {ClassLevelModel} from "../entity/class-level/class-level.model";
import {ClassLevelSubModel} from "../entity/class-level/class-level-sub.model";

export interface ClassLevelPayload {
  classLevel: ClassLevelModel
  subClassLevels: ClassLevelSubModel[]
}
