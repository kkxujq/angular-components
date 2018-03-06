import { GtMenus } from 'get-ui-ng/base';

export const menuList: GtMenus = [
  {
    label: 'Navigate',
    name: 'assistant',
    icon: 'icon-home',
    items: [
      {
        label: 'Tabs',
        name: 'tabs',
        link: '/tabs',
        activeLink: '/tabs'
      },
      {
        label: 'Datepicker',
        name: 'datepicker',
        link: '/datepicker',
        activeLink: '/datepicker'
      }, {
        label: 'Stepper',
        name: 'stepper',
        link: '/stepper',
        activeLink: '/stepper'
      }, {
        label: 'Select',
        name: 'select',
        link: '/select',
        activeLink: '/select'
      }
    ]
  }, {
    label: 'Popup',
    name: 'popup',
    icon: 'icon-home',
    items: [
      {
        label: 'Modal',
        name: 'modal',
        link: '/modal',
        activeLink: '/modal'
      }
    ]
  }
];
