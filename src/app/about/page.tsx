import React from 'react';
import About from '../../ui/pages/about';
import {Metadata} from 'next';
import {commonMetadata} from '@/core/config/main.config';

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${commonMetadata.title} - 关于我们`,
};
const AboutPage = () => {
  return (<About/>);
};
export default AboutPage;
