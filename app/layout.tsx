import React from 'react';
import {Metadata} from 'next';
import BasicLayout from '../layouts/basic.layout';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';
import Script from 'next/script';
import '../styles/globals.css';
// import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';

export const metadata: Metadata = {
  title: 'Web Evolution Studio',
  description: 'Web Evo(网络进化) 是一个现代网络咨询工作室，致力于帮助公司企业和个人实现数字化转型。我们提供设计、架构、开发、运营、产品指导等服务。',
  other: {
    '360-site-verification': '77b0e1a676566c755d708af4c92a3524',
    'bytedance-verification-code': 'wSvyXEgEi6nNu3eh/eDe',
    'theme-color': '#00B0FF',
    'baidu-site-verification': 'code-yx2HQhygQo',
    'msvalidate.01': 'AB78A0C987D3AEA34B969889512FF33E',
    // 谷歌验证
    'google-site-verification': '4rS5gjy4-tFOdJO4HvDg0_E4QNcB1D1YeZo29iS4hIY',
    // 百度联盟验证
    'baidu_union_verify': '50312ad0c63983b3fe6c2e2a6e10c386',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
};

/**
 * RootLayout
 * @param {React.ReactNode} children
 * @constructor
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BasicLayout>
          {children}
        </BasicLayout>
        {/* Google Analytics*/}
        <GoogleAnalytics measurementId={'G-R8ZM6SVZ0K'}/>
        {/* microsoft clarity */}
        <Script id={'microsoft-clarity'} dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "b91ge7rn7p");
            `,
        }}/>
        <Script
          src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031326139722537'}
          crossOrigin={'anonymous'} async strategy={'afterInteractive'}
        />
      </body>
    </html>
  );
}
