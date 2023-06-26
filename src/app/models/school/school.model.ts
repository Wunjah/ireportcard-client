import {BaseModel} from "../base/base.model";

export class SchoolModel extends BaseModel {
  constructor(
    public name: string,
    public organisationId: number,
    public currentYearId?: number,
    public currentSequenceId?: number,
    public applicationOpen?: boolean,
    public regNumPrefix?: string,
    public currentTerm?: string,
    public maxGrade?: number,
    public paymentSettingId?: number,
    public deletedAt?: Date
  ) {
    super();}
}
