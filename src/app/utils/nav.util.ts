import {NavItem, NavItemGroup} from "../modules/library/navigation/models/nav-item.model";
import {TreeNode} from "primeng/api";

export module NavUtil {

  const appUser: NavItem = {
    code: "user-nav",
    label: "User",
    icon: "user",
    link: "/app/user",
    children: [
      {
        label: "Profile",
        icon: "id-badge",
        link: "/app/user/profile",
      }
    ]
  }

  const appOrganisationDashboard: NavItem = {
    code: "org-dashboard-nav",
    label: "Dashboard",
    icon: "bi bi-grid",
    link: '/app/organisation'
  }
  const appOrganisationMembers: NavItem = {
    code: "members-nav",
    label: "Members",
    icon: "users",
    link: '/app/organisation/members',
    children: [
      {
        label: "Add Admin",
        icon: "user-plus",
        link: "/add/admin",
      },
      {
        label: "Add Staff",
        icon: "user-plus",
        link: "/add/staff",
      },
    ]
  }
  const appOrganisationSchools: NavItem = {
    code: "schools-nav",
    label: "Schools",
    icon: "school",
    link: '/app/organisation/schools',
    children: [
      {
        label: "Add School",
        icon: "school-circle-check",
        link: "/add",
      },
      {
        label: "Assign School Admin",
        icon: "user-lock",
        link: "/assign-admin",
      },
    ]
  }

  const appSchoolDashboard: NavItem = {
    code: "school-dashboard-nav",
    label: "Dashboard",
    icon: "bi bi-grid",
    link: '/app/school'
  }
  const appSchoolStudents: NavItem = {
    code: "student-nav",
    label: "Students",
    icon: "people-arrows",
    link: '/app/school/students',
    children: [
      {
        label: "Add Student",
        icon: "person-circle-plus",
        link: "/app/school/students/add",
      }
    ]
  }
  const appSchoolTeachers: NavItem = {
    code: "student-nav",
    label: "Teachers",
    icon: "person-chalkboard",
    link: '/app/school/teachers',
    children: [
      {
        label: "Add Teacher",
        icon: "user-plus",
        link: "/app/school/teachers/add",
      }
    ]
  }
  const appSchoolDepartments: NavItem = {
    code: "departments-nav",
    label: "Departments",
    icon: "landmark",
    link: '/app/school/departments',
    children: [
      {
        label: "Add",
        icon: "square-plus",
        link: "/app/school/classes/add",
      },
      {
        label: "View",
        icon: "square-plus",
        link: "/app/school/classes/view",
      }
    ]
  }
  const appSchoolClasses: NavItem = {
    code: "class-nav",
    label: "Classes",
    icon: "landmark",
    link: '/app/school/classes',
    children: [
      {
        label: "Add Class",
        icon: "square-plus",
        link: "/app/school/classes/add",
      }
    ]
  }

  const appSchoolCourses: NavItem = {
    code: "course-nav",
    label: "Courses",
    icon: "book",
    link: '/app/school/courses',
    children: [
      {
        label: "Add Course",
        icon: "book",
        link: "/app/school/courses/add",
      }
    ]
  }
  const appSchoolSettings: NavItem = {
    code: "school-settings-nav",
    label: "Settings",
    icon: "gear",
    link: '/app/school/settings'
  }

  export const ORGANISATION_ADMIN_NAV_GROUP = new NavItemGroup("", [
    appOrganisationDashboard,
    appOrganisationMembers,
    appOrganisationSchools,
    appUser
  ]);
  export const SCHOOL_ADMIN_NAV_GROUP = new NavItemGroup("", [
    appSchoolDashboard,
    appSchoolStudents,
    appSchoolTeachers,
    appSchoolDepartments,
    appSchoolClasses,
    appSchoolCourses,
    appSchoolSettings,
  ]);


  const navItemToTreeNode = (navItem: NavItem): TreeNode => {
    return <TreeNode>{
      label: navItem.label,
      icon: `fas fa-light fa-${navItem.icon}`,
      key: navItem.code,
      data: navItem.link,
      children: navItem.children?.map(navItemToTreeNode)
    }
  }

  export const ORGANISATION_ADMIN_NAV_TREE: TreeNode[] = ORGANISATION_ADMIN_NAV_GROUP.navItems.map(navItemToTreeNode);
  export const SCHOOL_ADMIN_NAV_TREE: TreeNode[] = SCHOOL_ADMIN_NAV_GROUP.navItems.map(navItemToTreeNode);
}

