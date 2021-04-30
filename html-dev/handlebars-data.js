const pagesRoot = 'http://localhost:3000/static_html/';
const imagesRoot = '../assets/images/';

const ml = {
  home: {href: 'home.html', title: 'Pagrindinis'},
  products: {href: 'products.html', title: 'Keramika'},
  about: {href: '#', title: 'Apie mus'},
  contact: {href: '#', title: 'Kontaktai'},
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
  },
  header: {
    links: [ml.home, ml.products, ml.about, ml.contact],
  },
  texts: {
    hero: '20 metų gaminame kartų kartoms. <br> Vazonai, fontanai, šviestuvai pagal individualų užsakymą.',
    about: 'Šeimos verslas nuo 1990 m. Rankų darbo originalūs vienetiniai ar mažatiražiniai gaminiai. Tai dailininkų fantazijos žaismas, meistrų perteikta širdžių šiluma Jums iš kartos į kartą.',
    cta: 'Turite klausimų? Paskambinkite mums.',
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