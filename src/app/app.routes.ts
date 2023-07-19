type AppRouteType = {
  [p: string]: string | AppRouteType;
  main: string;
  name: string;
}

export const AppRoutes: AppRouteType = {
  name: 'Routes',
  main: '/',
  auth: {
    main: '/auth',
    name: $localize `Authentication`,
    login: {
      main: '/login',
      name:$localize `Login`
    },
    register: {
      main: '/register',
      name:$localize `Register`
    }
  },
  app: {
    main: '/app',
    name: $localize `App`,
    home: '/app/home',
    user: {
      main: '/user',
      name:$localize `User`,
      profile: {
        main: '/profile',
        name: $localize`Profile`,
      }
    },
    organisation: {
      main: '/organisation',
      name: $localize`Organisation`,
      schools: {
        main: '/schools',
        name: $localize`Schools`,
        view: {
          main: '/view',
          name: $localize`View School`
        },
        assign_admin: {
          main: '/assign-admin',
          name:$localize `Assign Admin`
        }
      }
    },
    school: {
      main: '/school',
      name:$localize ``,
      students: {
        main: '/students',
        name: 'Students',
        view: {
          main: '/view',
          name: $localize`View Student`
        }
      },
      classes: {
        main: '/classes',
        name:$localize `Classes`
      },
      courses: {
        main: '/courses',
        name:$localize `Courses`
      },
      configuration: {
        main: '/configuration',
        name:$localize `Configuration`
      }
    },
    student: {
      main: '/student',
      name:$localize `Student`,
    },
    teacher: {
      main: '/teacher',
      name:$localize `Teacher`,
    }
  }
}

enum AppRouteKey {
  AUTH_LOGIN = 'auth.login',
  AUTH_REGISTER = 'auth.register',
  APP_ORGANISATION = 'app.organisation.',
  APP_ORGANISATION_SCHOOLS_VIEW = 'app.organisation.schools.view',
  APP_SCHOOL = 'app.school',
  APP_STUDENT = 'app.student',
  APP_TEACHER = 'app.teacher',
  APP_USER_PROFILE = 'app.user.profile',
}

export class AppRoute {
  static AUTH_LOGIN = new AppRoute(AppRouteKey.AUTH_LOGIN);
  static AUTH_REGISTER = new AppRoute(AppRouteKey.AUTH_REGISTER);
  static APP_ORG = new AppRoute(AppRouteKey.APP_ORGANISATION);
  static APP_ORG_SCHOOLS_VIEW = new AppRoute(AppRouteKey.APP_ORGANISATION_SCHOOLS_VIEW);
  static APP_SCHOOL = new AppRoute(AppRouteKey.APP_SCHOOL);
  static APP_STUDENT = new AppRoute(AppRouteKey.APP_STUDENT);
  static APP_TEACHER = new AppRoute(AppRouteKey.APP_TEACHER);
  static APP_USER_PROFILE = new AppRoute(AppRouteKey.APP_USER_PROFILE);
  private _r: string = "";
  private _n: string = "";

  constructor(key: AppRouteKey | string) {
    this.resolve(key);
  }

  private _routes: AppRouteType[] = [];

  get routes() {
    return this._routes;
  }

  get path() {
    return this._r;
  }

  get name() {
    return this._n;
  }

  private resolve(k: AppRouteKey | string) {
    let route = AppRoutes;
    const segments = k.split('.');
    const mains: string[] = [];
    segments.forEach((s, index) => {
      let m = route[s];
      if (typeof m === 'string' || m == undefined) {
      } else {
        if (index == segments.length - 1) {
          this._n = m.name;
        }
        route = m;
        mains.push(route.main);
        this._routes.push(route);
      }
    });
    this._r = mains.join('');
  }
}
