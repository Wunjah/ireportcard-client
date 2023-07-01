import {Gender} from "./gender.enum";

export enum Role {
  USER = "user",
  STUDENT = "student",
  TEACHER = "teacher",
  ORGANISATION_ADMIN = "organisation-admin",
  SCHOOL_ADMIN = "school-admin",
  SUPER_ADMIN = "super-admin"
}

export const roleValues = Object.values(Role)
  .filter(v => isNaN(Number(v)))
  .map(v => v.toString())

export function adminRoles(): Role[] {
  return [Role.ORGANISATION_ADMIN, Role.SCHOOL_ADMIN];
}

export function schoolRoles(): Role[] {
  return [Role.STUDENT, Role.TEACHER, Role.SCHOOL_ADMIN];
}

export function isOrganisationRole(role?: Role): boolean {
  return role != undefined && adminRoles().includes(role);
}

export function isSchoolRole(role?: Role): boolean {
  return role != undefined && schoolRoles().includes(role);
}
