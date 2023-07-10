export class YearEntity {
  constructor(
    public startYear: number,
    public cycleInfo: CycleInfo,
    public endYear?: number,
  ) {
  }
}

export interface CycleInfo {
  openingDate: Date,
  closingDate?: Date,
}
