export interface RegisterRequest {
  username: string
  password: string
  rememberMe: boolean
}

export interface RegisterResponse {
  token: string
  username: string
}
