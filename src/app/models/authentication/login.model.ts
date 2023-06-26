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
    public organisationId?: number
  ) {
  }
}
export interface LaunchResponse {
  schoolId?: number
  organisationId?: number
}
