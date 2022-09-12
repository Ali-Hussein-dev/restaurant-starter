//------------------------------type-utils
export type ImagesListT = { src: string }[];

export interface HeroT {
  h1: string;
  h2: string;
  h3: string;
  cta: string;
  img: string;
}

export interface GalleryT {
  title: string;
  images: ImagesListT;
}
export type OpeningHoursT = {
  from: `${string}:${string}`;
  to: `${string}:${string}`;
  off?: true;
  label: string;
  num: number;
}[];

export interface SocialLinksT {
  name: string;
  href: string;
}

export interface ContactInfoT {
  title?: string;
  email: string;
  phone: number;
}

export interface ContactT {
  title: string;
  bgImg: string;
  openingHours: { title: string; times: OpeningHoursT };
  contactInfo: ContactInfoT;
  address: { city: string; street: string; zipcode: number };
}

export interface ContactFormT {
  title: string;
  subtitle: string;
  description: string;
}

interface MenuT {
  label: string;
  images: ImagesListT;
}

export type MenuTabsT = {
  title: string;
  list: MenuT[];
};

export interface HeaderT {
  links: { label: string; href: string }[];
}

export interface FooterT {
  links: { social: SocialLinksT[] };
  name: string;
}
export interface RestaurantCtxT {
  name: string;
  hero: HeroT;
  contact: ContactT;
  gallery: GalleryT;
  menuTabs: MenuTabsT;
  contactForm: ContactFormT;
  footer: FooterT;
  header: HeaderT;
}
