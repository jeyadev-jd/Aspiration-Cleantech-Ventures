type MenuLink = {
  title: string;
  link: string;
};

export type MegaMenuDataType = {
  image: string;
  title: string;
  links: MenuLink[];
};

export type SubMenuDataType = {
  title: string;
  link: string;
  submenu?: MenuLink[];
};

export type MenuItemDataType = {
  title: string;
  link: string;
  megamenu?: MegaMenuDataType[];
  submenu?: SubMenuDataType[];
};


export const menuData: MenuItemDataType[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Services',
    link: '/service',
    submenu: [
      { title: 'Heat Pump', link: '/heat-pump' },
      { title: 'Organic Rankine Cycle (ORC)', link: '/orc' },
      { title: 'Waste to Energy Technology', link: '/waste-to-energy' },
      { title: 'Heat Pump Dryer', link: '/heat-pump-dryer' },
      { title: 'Waste Heat Recovery System', link: '/waste-heat-recovery' },
      { title: 'Solar Dryer', link: '/solar-dryer' },
      { title: 'Hydrogen Generator', link: '/hydrogen-generator' },
    ],
  },


  {
    title: 'Academy',
    link: '/academy',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];
