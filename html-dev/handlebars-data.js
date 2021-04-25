const pagesRoot = 'http://localhost:3000/static_html/';
const imagesRoot = '../assets/images/';

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

const carousel = {
  vase: {src: `${imagesRoot}product-1.jpg`, alt: 'Vazonas'},
  lamp: {src: `${imagesRoot}product-2.jpg`, alt: 'Pastatomas šviestuvas'},
  fountain: {src: `${imagesRoot}product-3.jpg`, alt: 'Fontanas'},
  fireplace: {src: `${imagesRoot}product-4.jpg`, alt: 'Židinys'},
  hanging: {src: `${imagesRoot}product-5.jpg`, alt: 'Paveikslas'},
  cylinder: {src: `${imagesRoot}product-6.jpg`, alt: 'Cilindrinis vazonas'},
  classic: {src: `${imagesRoot}product-7.jpg`, alt: 'Klasikinis vazonas'},
  round: {src: `${imagesRoot}product-8.jpg`, alt: 'Rutulinis vazonas'},
  vase2: {src: `${imagesRoot}product-9.jpg`, alt: 'Klasikinias vazonas'},
  mushroom: {src: `${imagesRoot}product-10.jpg`, alt: 'Grybo formos skulptūra'},
}

module.exports = {
  siteTitle: 'Šamoto keramika',
  siteDescription: 'Gaminiai iš šamoto molio',
  texts: {
    hero: '20 metų gaminame kartų kartoms. <br> Vazonai, fontanai, šviestuvai pagal individualų užsakymą.',
    about: 'Šeimos verslas nuo 1990 m. Rankų darbo originalūs vienetiniai ar mažatiražiniai gaminiai. Tai dailininkų fantazijos žaismas, meistrų perteikta širdžių šiluma Jums iš kartos į kartą.'
  },
  ml: ml,
  home: {
    link: ml.home,
  },
  roots: {
    images: imagesRoot,
  },
  carousel: {
    images: [carousel.vase, carousel.lamp, carousel.fountain, carousel.fireplace, carousel.hanging, carousel.cylinder, carousel.classic, carousel.round, , carousel.vase2, carousel.mushroom],
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