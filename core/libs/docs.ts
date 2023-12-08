import {Images} from './images';

export interface Framework {
  id: string;
  name: string;
  description: string;
  image: string;
  website?: string;
}
export interface Design {
  name: string;
  description: string;
  image: string;
  website?: string;
}
export const frameworks: Framework[] = [
  {
    id: 'react',
    image: Images.undrawReact.default.src,
    name: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    website: 'https://reactjs.org/',
  },
  {
    id: 'next.js',
    image: Images.undrawNextJs.default.src,
    name: 'Next.js',
    description: 'Next.js is a framework for server-rendered React applications.',
    website: 'https://nextjs.org/',
  },
  {
    id: 'nuxt.js',
    image: Images.undrawNuxtJs.default.src,
    name: 'Nuxt.js',
    description: 'Nuxt.js is a framework for server-rendered Vue applications.',
    website: 'https://nuxtjs.org/',
  },
];
export const designs: Design[] = [
  {
    name: 'Material Design',
    description: 'Material Design is a design language developed by Google.',
    image: Images.materialDesign.default.src,
    website: 'https://material.io/',
  },
  {
    name: 'Fluent Design',
    description: 'Fluent Design is a design language developed by Microsoft.',
    image: Images.fluentDesign.default.src,
    website: 'https://www.microsoft.com/design/fluent/',
  },
  {
    name: 'Ant Design',
    description: 'Ant Design is a design language developed by Ali.',
    image: Images.antDesign.default.src,
    website: 'https://ant.design/',
  },
  {
    name: 'Arco design',
    description: 'Arco design is a design language developed by ByteDance.',
    image: Images.arcoDesign.default.src,
    website: 'https://arco.design/',
  },
  {
    name: 'Semi Design',
    description: 'Semi Design is a design language developed by ByteDance.',
    image: Images.semiDesign.default.src,
    website: 'https://semi.design/',
  },
];
