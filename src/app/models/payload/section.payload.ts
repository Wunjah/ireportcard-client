import {SectionEntity} from "../entity/school/section.entity";
import {SchoolEntity} from "../entity/school/school.entity";

export interface SectionPayload {
  section: SectionEntity
  school: SchoolEntity
}
