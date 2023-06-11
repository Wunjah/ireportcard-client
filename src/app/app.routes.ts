const routeToUri = (path: string, params?: {}) => {
  return `${path}${params}`
}


export const AppRoutes = {
  authentication: {
    register: '/auth/register',
    login: '/auth/login'
  },
  app: {
    home: '/app/home',
    user: {
      profile: '/app/user/profile'
    }
  }
}
