import React from 'react';
import About from '../../ui/pages/about';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Web Evo - 关于我们',
  description: '我们与客户和同事的专业和友好，我们互相对待，就像我们想要的对待一样。 我们的工作环境强调平等，透明度……和宠物友好的氛围！ 这就是网络进化的全部内容:)',
};
const AboutPage = () => {
  return (<About/>);
};
export default AboutPage;
