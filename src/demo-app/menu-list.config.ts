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
      }, {
        label: 'Popover',
        name: 'popover',
        link: '/popover',
        activeLink: 'popover'
      }
    ]
  }, {
    label: 'Table',
    name: 'table',
    icon: 'icon-home',
    items: [
      {
        label: 'Pagination',
        name: 'pagination',
        link: '/pagination',
        activeLink: '/pagination'
      },  {
        label: 'table',
        name: 'table',
        link: '/table',
        activeLink: '/table'
      }
    ]
  }, {
    label: 'Form',
    name: 'form',
    icon: 'icon-home',
    items: [
      {
        label: 'Slider',
        name: 'slider',
        link: '/slider',
        activeLink: '/slider'
      }, {
        label: 'Button',
        name: 'button',
        link: '/button',
        activeLink: '/button'
      }, {
        label: 'Checkbox',
        name: 'checkbox',
        link: '/checkbox',
        activeLink: '/checkbox'
      }, {
        label: 'Radio',
        name: 'radio',
        link: '/radio',
        activeLink: '/radio'
      }, {
        label: 'Select',
        name: 'select',
        link: '/select',
        activeLink: '/select'
      }, {
        label: 'FileUpload',
        name: 'fileupload',
        link: '/fileupload',
        activeLink: '/fileupload'
      }
    ]
  }
];
