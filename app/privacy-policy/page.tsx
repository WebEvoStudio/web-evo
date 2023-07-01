import React from 'react';
import {PrivacyPolicy} from '../../ui/pages/privacy-policy';
import {Metadata} from 'next';
import {commonMetadata} from '../../core/config/main.config';

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${commonMetadata.title} - 隐私协议`,
};
const PrivacyPolicyPage = () => {
  return (
    <PrivacyPolicy></PrivacyPolicy>
  );
};
export default PrivacyPolicyPage;
