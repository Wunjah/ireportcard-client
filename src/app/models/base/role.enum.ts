export enum UserRole {
  RC_USER = "auth.policy.role.name.user",
  RC_STUDENT = "auth.policy.role.name.student",
  RC_TEACHER = "auth.policy.role.name.teacher",
  RC_ORGANISATION_ADMIN = "auth.policy.role.name.organisation-admin",
  RC_SCHOOL_ADMIN = "auth.policy.role.name.school-admin",
  RC_SUPER_ADMIN = "auth.policy.role.name.super-admin"
}

export function adminRoles(): UserRole[] {
  return [UserRole.RC_ORGANISATION_ADMIN, UserRole.RC_SCHOOL_ADMIN];
}

export function schoolRoles(): UserRole[] {
  return [UserRole.RC_STUDENT, UserRole.RC_TEACHER, UserRole.RC_SCHOOL_ADMIN];
}

export function isOrganisationRole(role?: UserRole): boolean {
  return role != undefined && adminRoles().includes(role);
}

export function isSchoolRole(role: UserRole): boolean {
  return schoolRoles().includes(role);
}
