const pagesRoot = 'http://localhost:3000/static_html/';
const imagesRoot = '../assets/images/';

const ml = {
  home: {href: '#', title: 'Pagrindinis'},
  products: {href: '#', title: 'Mūsų keramika'},
  about: {href: '#', title: 'Apie mus'},
  contact: {href: '#', title: 'Kontaktai'},
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
    about: 'Šeimos verslas nuo 1990 m. Rankų darbo originalūs vienetiniai ar mažatiražiniai gaminiai. Tai dailininkų fantazijos žaismas, meistrų perteikta širdžių šiluma Jums iš kartos į kartą.',
    cta: 'Turite klausimų? Paskambinkite mums.',
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
    {title: 'Facebook', icon: 'ic-facebook', href: '#', canShare: true,},
  ],
  header: {
    links: [ml.home, ml.products, ml.about, ml.contact],
  },
  footer: {
    copyright: '@ 2021 PP Creations',
    company: this.siteTitle,
    address: 'Jazminų g. 30a, Panevėžys',
    phone: [
      {phone1: '+37069984297', phone2: '+37067220134', phone3: '8-45576654'},
    ],
    email: 'samotokeramika@gmail.com',
    gallery: 'Amerikos g.2A, Panevėžys',
  }
};