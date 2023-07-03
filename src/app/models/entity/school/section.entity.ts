export class SectionEntity {
  constructor(
    public id: number,
    public name: string,
    public schoolId: number,
    public numberOfSubjects?: number,
    public numberOfClassLevels?: number,
  ) {
  }
}
