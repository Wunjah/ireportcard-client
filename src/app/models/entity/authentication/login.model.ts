export interface LoginRequest {
  username: string
  password: string
  rememberMe?: boolean
}

export interface LoginResponse {
  token: string
  username: string
}

export class LaunchResponse {
  constructor(
    public schoolId?: number,
    public organisationId?: number,
    public schoolStats?: SchoolStats
  ) {
  }
}

export interface LaunchResponse {
  schoolId?: number
  organisationId?: number
  schoolStats?: SchoolStats
}

export interface SchoolStat {
  name: string,
  value: any,
  icon: string
}

export interface SchoolStats {
  numberOfTeachers: number,
  numberOfStudents: number,
  numberOfDepartments: number,
  numberOfApplications: number
}

export const EmptySchoolStats: SchoolStat[] = [
  {
    name: 'Teachers',
    value: 0,
    icon: 'chalkboard-user'
  },
  {
    name: 'Students',
    value: 0,
    icon: 'user-graduate'
  },
  {
    name: 'Departments',
    value: 0,
    icon: 'building'
  },
  {
    name: 'Applications',
    value: 0,
    icon: 'folder-open'
  }
];
