export interface NavItem {
  id?: number,
  code?: string,
  label: string,
  icon: string,
  link: string,
  active?: boolean,
  action?: () => void,
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
}
