import { ILFlag } from '@components/icons/language/ILFlag';
import { SAFlag } from '@components/icons/language/SAFlag';
import { CNFlag } from '@components/icons/language/CNFlag';
import { USFlag } from '@components/icons/language/USFlag';
import { DEFlag } from '@components/icons/language/DEFlag';
import { ESFlag } from '@components/icons/language/ESFlag';

export const siteSettings = {
  name: 'RudiShule',
  description: 'School Shopping at your fingertips',
  author: {
    name: 'RudiShule.',
    websiteUrl: 'https://rudushule.com',
    address: '',
  },
  logo: {
    url: '/assets/images/logo.svg',
    alt: 'Rudishule',
    href: '/',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'Ugx',
  site_header: {
    menu: [
      {
        id: 2,
        path: '/nursery',
        label: 'Nursery School',
        subMenu: [
          {
            id: 1,
            path: '/nursery',
            label: 'Boarding',
          },
          {
            id: 2,
            path: '/nursery',
            label: 'Day',
          },
        ],
      },
      {
        id: 3,
        path: '/primary',
        label: 'Primary School',
        subMenu: [
          {
            id: 1,
            path: '/primary',
            label: 'Boarding',
          },
          {
            id: 2,
            path: '/primary',
            label: 'Day',
          },
        ],
      },
      {
        id: 4,
        path: '/secondary/',
        label: 'Seconday School',
        subMenu: [
          {
            id: 1,
            path: '/secondary',
            label: 'Boarding',
          },
          {
            id: 2,
            path: '/secondary',
            label: 'Day',
          },
        ],
      },
      {
        id: 5,
        path: '/schools/',
        label: 'Our Partners',
      },
      {
        id: 6,
        path: '/about-us/',
        label: 'About Us',
      },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag />,
      },
      {
        id: 'en',
        name: 'English - EN',
        value: 'en',
        icon: <USFlag />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <ESFlag />,
      },
    ],
    pagesMenu: [
      {
        id: 1,
        path: '/search',
        label: 'menu-best-deals',
      },
      {
        id: 2,
        path: '/about-us',
        label: 'menu-about-us',
      },
      {
        id: 3,
        path: '/contact-us',
        label: 'menu-contact-us',
      },
      {
        id: 4,
        path: '/faq',
        label: 'menu-faq',
      },
    ],
  },
};
