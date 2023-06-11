import {environment} from "../environments/environment";

export const AppEndpoints = {
  base: environment.apiUrl,
  auth: {
    login: '/auth/login',
    register: '/auth/register'
  },
  user: '/user'
}

const s : AppEndpoint = {
  base: environment.apiUrl,
  auth: {
    base: 'auth',
    login: 'login',
    register: 'register'
  }
}

type AppEndpoint = {
  [c: string]: AppEndpoint | string
  base: string,
}

type AppEndpointName = 'auth' | 'teacher' | 'academic-year'
