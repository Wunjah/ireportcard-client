export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other"
}

export const genderValues = Object.values(Gender)
  .filter(v => isNaN(Number(v)))
  .map(v => v.toString())
