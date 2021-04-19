const ml = {
  home: {href: '#', title: 'Home'},
  projects: {href: '#', title: 'Projects'},
  about: {href: '#', title: 'About-us'},
  contact: {href: '#', title: 'Contact'},
};

const fl = {
  termsConditions: {href: '#', title: 'Terms & conditions'},
  dataProtection: {href: '#', title: 'Data protection'},
  impressum: {href: '#', title: 'Impressum'},
  survey: {href: '#', title: 'Survey'},
  faq: {href: '#', title: 'faq'},
};

const pagesRoot = 'http://localhost:3000/static_html/';
const imagesRoot = '../assets/images/';

module.exports = {
  siteTitle: 'Šamoto keramika',
  siteDescription: 'gaminiai iš šamoto molio',
  ml: ml,
  logos: {
    white: `${imagesRoot}logo-white.png`,
    black: `${imagesRoot}logo-black.png`,
    color: `${imagesRoot}logo-color.png`,
  },
  socials: [
    {title: 'Youtube', icon: 'ic-youtube', href: '#', canShare: false,},
    {title: 'Trip Advisor', icon: 'ic-tripadvisor', href: '#', canShare: false,},
    {title: 'Twitter', icon: 'ic-twitter', href: '#', canShare: true,},
    {title: 'Facebook', icon: 'ic-facebook', href: '#', canShare: true,},
  ],
  header: {
    links: [ml.home, ml.projects, ml.about, ml.contact],
  },
  footer: {
    copyright: '@ 2021 PP Creations',
    links: [fl.termsConditions, fl.dataProtection, fl.impressum, fl.survey, fl.faq],
  },
  home: {
    link: ml.home,
  },
  leftMenu: [
    {
      title: 'MAIN',
      menu: [
        {
          title: 'Patients',
          href: '#',
          icon: '<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill- rule="evenodd" clip - rule="evenodd" d = "M0.888672 2.5C0.888672 1.67157 1.56024 1 2.38867 1H21.6109C22.4393 1 23.1109 1.67157 23.1109 2.5V19.5C23.1109 20.3284 22.4393 21 21.6109 21H2.38867C1.56024 21 0.888672 20.3284 0.888672 19.5V2.5Z" stroke = "#9097A0" stroke - width="1.5" stroke - linecap="round" stroke - linejoin="round" /> <path d="M0.888672 6H23.1109" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.1486 11H14.2227" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.1856 16H14.2227" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7.55664 10.1665V16.8332" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.5918 13.5H10.5177" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg >',
        },
        {
          title: 'Projects',
          href: '#',
          icon: '<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill- rule="evenodd" clip - rule="evenodd" d = "M0.888672 2.5C0.888672 1.67157 1.56024 1 2.38867 1H21.6109C22.4393 1 23.1109 1.67157 23.1109 2.5V19.5C23.1109 20.3284 22.4393 21 21.6109 21H2.38867C1.56024 21 0.888672 20.3284 0.888672 19.5V2.5Z" stroke = "#9097A0" stroke - width="1.5" stroke - linecap="round" stroke - linejoin="round" /> <path d="M0.888672 6H23.1109" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.1486 11H14.2227" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.1856 16H14.2227" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7.55664 10.1665V16.8332" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.5918 13.5H10.5177" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg >',
        },
        {
          title: 'Invoices',
          href: '#',
          icon: '<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill- rule="evenodd" clip - rule="evenodd" d = "M0.888672 2.5C0.888672 1.67157 1.56024 1 2.38867 1H21.6109C22.4393 1 23.1109 1.67157 23.1109 2.5V19.5C23.1109 20.3284 22.4393 21 21.6109 21H2.38867C1.56024 21 0.888672 20.3284 0.888672 19.5V2.5Z" stroke = "#9097A0" stroke - width="1.5" stroke - linecap="round" stroke - linejoin="round" /> <path d="M0.888672 6H23.1109" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.1486 11H14.2227" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.1856 16H14.2227" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7.55664 10.1665V16.8332" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.5918 13.5H10.5177" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg >',
        },
        {
          title: 'Settings',
          href: '#',
          icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill- rule="evenodd" clip - rule="evenodd" d = "M10.5783 2.64729C10.9414 3.05033 11.4584 3.28043 12.0009 3.28043C12.5433 3.28043 13.0603 3.05033 13.4234 2.64729L14.3489 1.63175C14.8925 1.0302 15.7557 0.835714 16.5047 1.14607C17.2537 1.45643 17.7264 2.20449 17.6852 3.01418L17.6157 4.38389C17.5885 4.92422 17.7911 5.45084 18.1734 5.83366C18.5556 6.21649 19.082 6.41983 19.6223 6.39345L20.992 6.32399C21.8012 6.2841 22.548 6.75726 22.8576 7.50592C23.1672 8.25457 22.9726 9.11701 22.3715 9.66021L21.3521 10.5799C20.9496 10.9435 20.7198 11.4605 20.7198 12.0029C20.7198 12.5453 20.9496 13.0624 21.3521 13.4259L22.3715 14.3456C22.9731 14.8891 23.1676 15.7524 22.8572 16.5014C22.5469 17.2504 21.7988 17.7231 20.9891 17.6818L19.6194 17.6124C19.0779 17.5845 18.5499 17.7875 18.1664 18.1709C17.783 18.5544 17.58 19.0823 17.6079 19.6239L17.6773 20.9936C17.7132 21.799 17.2412 22.5408 16.4965 22.8495C15.7517 23.1581 14.8933 22.9677 14.3489 22.3731L13.4283 21.3546C13.0649 20.9521 12.548 20.7224 12.0058 20.7224C11.4635 20.7224 10.9466 20.9521 10.5832 21.3546L9.65867 22.3731C9.11509 22.9706 8.25525 23.1631 7.50875 22.8545C6.76226 22.546 6.28937 21.8025 6.32636 20.9955L6.3968 19.6258C6.42465 19.0843 6.22169 18.5563 5.83825 18.1729C5.45481 17.7894 4.92683 17.5865 4.38528 17.6143L3.01557 17.6838C2.2062 17.726 1.45783 17.2544 1.14678 16.5059C0.835728 15.7575 1.02932 14.8944 1.6302 14.3505L2.64868 13.4308C3.0512 13.0673 3.28092 12.5502 3.28092 12.0078C3.28092 11.4654 3.0512 10.9483 2.64868 10.5848L1.6302 9.66021C1.03134 9.11698 0.838031 8.25622 1.14711 7.50908C1.45619 6.76193 2.20109 6.2893 3.00872 6.3279L4.37843 6.39737C4.92103 6.42589 5.45021 6.22266 5.83423 5.83827C6.21824 5.45388 6.42096 4.9245 6.39191 4.38194L6.32636 3.01125C6.28848 2.20397 6.76106 1.45968 7.50777 1.15056C8.25448 0.841436 9.11486 1.03392 9.65867 1.63175L10.5783 2.64729Z" stroke = "#9097A0" stroke - width="1.5" stroke - linecap="round" stroke - linejoin="round" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 16.4054C14.4318 16.4054 16.4029 14.4343 16.4029 12.0027C16.4029 9.57123 14.4318 7.6001 12.0003 7.6001C9.56879 7.6001 7.59766 9.57123 7.59766 12.0027C7.59766 14.4343 9.56879 16.4054 12.0003 16.4054Z" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </svg >',
        },
      ],
    },
    {
      title: 'OTHER',
      menu: [
        {
          title: 'Knowledge base',
          href: '#',
          icon: '<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill- rule="evenodd" clip - rule="evenodd" d = "M0.888672 2.5C0.888672 1.67157 1.56024 1 2.38867 1H21.6109C22.4393 1 23.1109 1.67157 23.1109 2.5V19.5C23.1109 20.3284 22.4393 21 21.6109 21H2.38867C1.56024 21 0.888672 20.3284 0.888672 19.5V2.5Z" stroke = "#9097A0" stroke - width="1.5" stroke - linecap="round" stroke - linejoin="round" /> <path d="M0.888672 6H23.1109" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M20.1486 11H14.2227" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M17.1856 16H14.2227" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M7.55664 10.1665V16.8332" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.5918 13.5H10.5177" stroke="#9097A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg >',
        },
      ],
    }
  ],
  projects: [
    {
      project_Id: 6541234,
      patient: 'Annette Black',
      products: 2,
      status: 'completed',
      date_created: '27 Mar., 2020',
      price: '€974.36',
      href: '#'
    },
    {
      project_Id: 6541234,
      patient: 'Annette Black',
      products: 2,
      status: 'completed',
      date_created: '27 Mar., 2020',
      price: '€974.36',
      href: '#'
    },
    {
      project_Id: 6541234,
      patient: 'Annette Black',
      products: 2,
      status: 'completed',
      date_created: '27 Mar., 2020',
      price: '€974.36',
      href: '#'
    },
    {
      project_Id: 6541234,
      patient: 'Annette Black',
      products: 2,
      status: 'completed',
      date_created: '27 Mar., 2020',
      price: '€974.36',
      href: '#'
    },
    {
      project_Id: 6541234,
      patient: 'Annette Black',
      products: 2,
      status: 'completed',
      date_created: '27 Mar., 2020',
      price: '€974.36',
      href: '#'
    },
    {
      project_Id: 6541234,
      patient: 'Annette Black',
      products: 2,
      status: 'completed',
      date_created: '27 Mar., 2020',
      price: '€974.36',
      href: '#'
    },
  ],
};