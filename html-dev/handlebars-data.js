const pagesRoot = 'http://localhost:3000/static_html/';
const imagesRoot = '../assets/images/';
const iconRoot = '../assets/fonts/symbol-defs.svg#';

const ml = {
  home: {href: 'home.html', title: 'Pagrindinis'},
  products: {href: 'products.html', title: 'Keramika'},
  about: {href: 'aboutus.html', title: 'Apie mus'},
  contact: {href: 'contact.html', title: 'Kontaktai'},
};

module.exports = {
  siteTitle: 'Šamoto keramika',
  siteDescription: 'Gaminiai iš šamoto molio',
  ml: ml,
  home: {
    link: ml.home,
  },
  roots: {
    images: imagesRoot,
    icons: iconRoot,
  },
  header: {
    links: [ml.home, ml.products, ml.about, ml.contact],
  },
  texts: {
    hero: '20 metų gaminame kartų kartoms. <br> Vazonai, fontanai, šviestuvai pagal individualų užsakymą.',
    cta: 'Turite klausimų? Paskambinkite mums.',
    contact: 'Turite klausimų? Mielai į juos atsakysime. Susisiekti galite Jums patogiu būdu.',
  },
  carousel: [
    {src: `${imagesRoot}product-1.jpg`, alt: 'Vazonas'},
    {src: `${imagesRoot}product-2.jpg`, alt: 'Pastatomas šviestuvas'},
    {src: `${imagesRoot}product-3.jpg`, alt: 'Fontanas'},
    {src: `${imagesRoot}product-4.jpg`, alt: 'Židinys'},
    {src: `${imagesRoot}product-5.jpg`, alt: 'Paveikslas'},
    {src: `${imagesRoot}product-6.jpg`, alt: 'Cilindrinis vazonas'},
    {src: `${imagesRoot}product-7.jpg`, alt: 'Klasikinis vazonas'},
    {src: `${imagesRoot}product-8.jpg`, alt: 'Rutulinis vazonas'},
    {src: `${imagesRoot}product-9.jpg`, alt: 'Klasikinias vazonas'},
    {src: `${imagesRoot}product-10.jpg`, alt: 'Grybo formos skulptūra'},
  ],
  categories: [
    {title: 'Vazonai', href: '#'},
    {title: 'Fontanai', href: '#'},
    {title: 'Skulptūros', href: '#'},
    {title: 'Figūros', href: '#'},
    {title: 'Šviestuvai', href: '#'},
    {title: 'Židiniai', href: '#'},
    {title: 'Suvenyrai', href: '#'},
  ],
  products: [
    {src: `${imagesRoot}product-1.jpg`, alt: 'Vazonas', code: '7.26 O28 h96',  href: '#'},
    {src: `${imagesRoot}product-2.jpg`, alt: 'Pastatomas šviestuvas', code: '1.3 h55',  href: '#'},
    {src: `${imagesRoot}product-3.jpg`, alt: 'Fontanas', code: 'Pictures pr.0043',  href: '#'},
    {src: `${imagesRoot}product-4.jpg`, alt: 'Židinys', code: 'Z_2_',  href: '#'},
    {src: `${imagesRoot}product-5.jpg`, alt: 'Paveikslas', code: '20.15 h30 l20',  href: '#'},
    {src: `${imagesRoot}product-6.jpg`, alt: 'Cilindrinis vazonas', code: '7.30 H4 O25',  href: '#'},
    {src: `${imagesRoot}product-7.jpg`, alt: 'Klasikinis vazonas', code: '9.15 H60,30 O35',  href: '#'},
    {src: `${imagesRoot}product-8.jpg`, alt: 'Rutulinis vazonas', code: 'Pictures0081',  href: '#'},
    {src: `${imagesRoot}product-9.jpg`, alt: 'Klasikinis vazonas', code: 'vazonas50x45',  href: '#'},
    {src: `${imagesRoot}product-10.jpg`, alt: 'Grybo formos skulptūra', code: 'DSC06662',  href: '#'},
  ],
  features: [
    {feature: 'Rankų darbo',
    text: 'Rankų darbo originalūs vienetiniai ar mažatiražiniai gaminiai.',
    icon: `${iconRoot}icon-hammer`},
    {feature: 'Universalūs',
    text: 'Mūsų dirbiniai papuoš Jūsų namus ir aplinką. Taip pat puikiai tiks ir dovanai.',
    icon: `${iconRoot}icon-spinner10`},
    {feature: 'Unikalūs',
    text: 'Dailininkai-keramikai sukuria unikalių formų, įvairios apimties gaminius.',
    icon: `${iconRoot}icon-magic-wand`},
    {feature: 'Medžiagos',
    text: 'Šamoto keramika, dar vadinama akmens masės keramika, degama aukštoje temperatūroje (1350 C)',
    icon: `${iconRoot}icon-fire`},
    {feature: 'Kokybė',
    text: 'Gaminiai yra tvirti, neblunkančių atspalvių, atsparūs drėgmei, šalčiui, nekenksmingi žmogaus sveikatai.',
    icon: `${iconRoot}icon-shield`},
    {feature: 'Sertifikuoti',
    text: 'Gamybai naudojamos medžiagos atitinka Europos kokybės reikalavimus.',
    icon: `${iconRoot}icon-leaf`},
  ],
  socials: [
    {title: 'Facebook', icon: 'ic-facebook', href: '#', canShare: true,},
  ],
  footer: {
    copyright: '&#169; 2021 PP Creations',
    address: 'Jazminų g. 30a, Panevėžys',
    phones: ['+37069984297', '+37067220134', '8-45576654'],
    email: 'samotokeramika@gmail.com',
    gallery: 'Amerikos g.2A, Panevėžys',
  }
};