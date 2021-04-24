const ml = {
  home: {href: '#', title: 'Pagrindinis'},
  products: {href: '#', title: 'Mūsų keramika'},
  about: {href: '#', title: 'Apie mus'},
  contact: {href: '#', title: 'Kontaktai'},
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
  siteDescription: 'Gaminiai iš šamoto molio',
  ml: ml,
  home: {
    link: ml.home,
  },
  roots: {
    images: imagesRoot,
  },
  logos: {
    blue: `${imagesRoot}logo-blue.png`,
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
    links: [ml.home, ml.products, ml.about, ml.contact],
  },
  footer: {
    copyright: '@ 2021 PP Creations',
    links: [fl.termsConditions, fl.dataProtection, fl.impressum, fl.survey, fl.faq],
  }
};