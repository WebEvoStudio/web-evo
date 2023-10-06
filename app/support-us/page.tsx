import React from 'react';
import {Metadata} from 'next';
import {commonMetadata} from '../../core/config/main.config';
import SupportUs from '../../ui/pages/support-us';

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${commonMetadata.title} - 支持我们`,
};
const SupportUsPage = () => {
  return (<SupportUs/>);
};
export default SupportUsPage;
