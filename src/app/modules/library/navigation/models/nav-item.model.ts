export interface NavItem {
  id?: string,
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

  }

  switchActive = (item: NavItem, items?: NavItem[]) => {
    (items ?? this.navItems).forEach(ni => {
      ni.active = ni == item || ni.children?.find(child => child == item) != undefined;
      if (ni.children) {
        this.switchActive(item, ni.children);
      }
    });
  }
}
