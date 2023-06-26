export enum Gender {
  MALE, FEMALE, OTHER
}

export const genderValues = Object.values(Gender)
  .filter(v => isNaN(Number(v)))
  .map(v => v.toString())
