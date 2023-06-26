export interface NavItem {
  id?: number,
  code?: string,
  name: string,
  icon: string,
  link: string,
  active?: boolean,
  children?: NavItem[]
}

export interface NavItemGroup {
  name: string,
  navItems: NavItem[]
}

export class NavItemGroup {
  constructor(
    public name: string,
    public navItems: NavItem[]
  ) {
    let id = 0;
    navItems.forEach(i => {
      i.id = ++id;
      i.children?.forEach(c => {
        c.id = ++id;
      })
    });
  }

  switchActive = (item: NavItem, items?: NavItem[]) => {
    (items ?? this.navItems).forEach(navItem => {
      navItem.active = navItem.id == item.id || navItem.children?.find(child => child == item) != undefined;
      if (navItem.children) {
        navItem.children.forEach(childItem => {
          childItem.active = childItem.id == item.id
        })
      }
    });
  }
}
