import {environment} from "../environments/environment";

export const AppEndpoints: AppEndpointType = {
  main: environment.apiUrl,
  academic_cycle: {
    main: '/academic-cycle',
    year: {
      main: 'year'
    },
    term: {
      main: 'term'
    },
    sequence: {
      main: 'sequence'
    }
  },
  auth: {
    main: '/auth',
    login: {
      main: '/login'
    },
    register: {
      main: '/register'
    },
    check: {
      main: '/check'
    }
  },
  class_level: {
    main: '/class-level'
  },
  department: {
    main: '/department'
  },
  launch: {
    main: '/launch'
  },
  user: {
    main: '/user'
  },
  section: {
    main: '/section'
  },
  school: {
    main: '/school',
    staff: {
      main: '/school-staff'
    }
  },
  subject: {
    main: '/subject'
  }
}


type AppEndpointType = {
  [c: string]: string | AppEndpointType
  main: string,
}

enum AppEndpointKey {
  ACADEMIC_CYCLE = 'academic_cycle',
  AUTH_CHECK = 'auth.check',
  AUTH_LOGIN = "auth.login",
  AUTH_REGISTER = "auth.register",
  CLASS_LEVEL = 'class_level',
  LAUNCH = "launch",
  SCHOOL = 'school',
  SCHOOL_STAFF = 'school.staff',
  USER = 'user',
  SECTION = 'section',
  SUBJECT = 'subject',
  DEPARTMENT = 'department',
}

export class AppEndpoint {
  static AUTH_LOGIN = new AppEndpoint(AppEndpointKey.AUTH_LOGIN);
  static AUTH_REGISTER = new AppEndpoint(AppEndpointKey.AUTH_REGISTER);
  static AUTH_CHECK = new AppEndpoint(AppEndpointKey.AUTH_CHECK);
  static CLASS_LEVEL = new AppEndpoint(AppEndpointKey.CLASS_LEVEL);
  static DEPARTMENT = new AppEndpoint(AppEndpointKey.DEPARTMENT);
  static LAUNCH = new AppEndpoint(AppEndpointKey.LAUNCH);
  static SCHOOL = new AppEndpoint(AppEndpointKey.SCHOOL);
  static SCHOOL_STAFF = new AppEndpoint(AppEndpointKey.SCHOOL_STAFF);
  static SECTION = new AppEndpoint(AppEndpointKey.SECTION);
  static SUBJECT = new AppEndpoint(AppEndpointKey.SUBJECT);
  static USER = new AppEndpoint(AppEndpointKey.USER);
  static ACADEMIC_CYCLE = new AppEndpoint(AppEndpointKey.ACADEMIC_CYCLE);
  private _base: string = "";
  private _path: string = "";
  private readonly _url: string

  constructor(key: string | AppEndpointKey) {
    this._url = this.constructUrl(key);
    this.validate();
  }

  get url() {
    return this._url;
  }

  private validate = () => {
    if (this._path.includes("//")) {
      throw new Error(`Invalid endpoint path: ${this._path}`);
    }
  }

  private constructUrl = (key: string) => {
    let endpoint = AppEndpoints;
    this._base = endpoint.main
    const segments = key.split('.');
    const mains: string[] = [];
    segments.forEach(s => {
      const n = endpoint[s];
      if (typeof n === 'string' || n == undefined) {
      } else {
        endpoint = n;
      }
      mains.push(endpoint.main);
    });
    this._path = mains.join('');
    return `${this._base}${this._path}`;
  }
}
