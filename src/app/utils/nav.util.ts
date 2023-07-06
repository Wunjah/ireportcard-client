import {NavItem, NavItemGroup} from "../modules/library/navigation/models/nav-item.model";

export module NavUtil {
  const appDashboard: NavItem = {
    code: "dashboard-nav",
    name: "Dashboard",
    icon: "bi bi-grid",
    link: 'app/dashboard'
  }
  const appUser: NavItem = {
    code: "user-nav",
    name: "User",
    icon: "bi bi-person-fill",
    link: "/app/user",
    children: [
      {
        name: "Profile",
        icon: "bi bi-person-fill",
        link: "/profile",
      }
    ]
  }

  const appOrganisationMembers: NavItem = {
    code: "members-nav",
    name: "Members",
    icon: "bi bi-people-fill",
    link: '/app/organisation/members',
    children: [
      {
        name: "Add Admin",
        icon: "bi bi-person-add",
        link: "/add/admin",
      },
      {
        name: "Add Staff",
        icon: "bi bi-person-add",
        link: "/add/staff",
      },
    ]
  }
  const appOrganisationSchools: NavItem = {
    code: "schools-nav",
    name: "Schools",
    icon: "bi bi-building",
    link: '/app/organisation/schools',
    children: [
      {
        name: "Add School",
        icon: "bi bi-building-add",
        link: "/add",
      },
      {
        name: "Assign School Admin",
        icon: "bi bi-person-fill-lock",
        link: "/assign-admin",
      },
    ]
  }

  const appSchoolStudents: NavItem = {
    code: "student-nav",
    name: "Students",
    icon: "bi bi-people-fill",
    link: '/app/school/students',
    children: [
      {
        name: "Add Student",
        icon: "bi bi-person-add",
        link: "/add/student",
      }
    ]
  }
  const appSchoolClasses: NavItem = {
    code: "class-nav",
    name: "Classes",
    icon: "bi bi-people-fill",
    link: '/app/school/classes',
    children: [
      {
        name: "Add Class",
        icon: "bi bi-person-add",
        link: "/add/class",
      }
    ]
  }

  const appSchoolCourses: NavItem = {
    code: "course-nav",
    name: "Courses",
    icon: "bi bi-people-fill",
    link: '/app/school/courses',
    children: [
      {
        name: "Add Student",
        icon: "bi bi-person-add",
        link: "/add/course",
      }
    ]
  }

  export const ORGANISATION_ADMIN_NAV_GROUP = new NavItemGroup("", [
    appDashboard,
    appOrganisationMembers,
    appOrganisationSchools,
    appUser
  ]);
  export const SCHOOL_ADMIN_NAV_GROUP = new NavItemGroup("", [
    appDashboard,
    appSchoolStudents,
    appSchoolClasses,
    appSchoolCourses,
    appUser
  ]);
}
