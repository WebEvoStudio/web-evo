import Head from 'next/head';
import Script from 'next/script';
import React from 'react';

/**
 * CommonHead
 * @param {any} props
 * @constructor
 */
export default function CommonHead(props: {title?: string, description?: string}) {
  const description = '獠 - web开发者中心 是一个帮助web开发者成长的社区。我们以技术文章为核心的产品形态，为开发者提供纯粹、高质的技术文章。';
  return (
    <Head>
      <link rel="icon" href={'/favicon.ico'} />
      <title>{props.title||'獠 - web开发者中心'}</title>
      <meta name={'description'} content={props.description||description}/>
      {/* 百度验证*/}
      <meta name="baidu-site-verification" content="code-yx2HQhygQo" />
      {/* 必应验证*/}
      <meta name="msvalidate.01" content="AB78A0C987D3AEA34B969889512FF33E" />
      {/* 谷歌验证*/}
      <meta name="google-site-verification" content="4rS5gjy4-tFOdJO4HvDg0_E4QNcB1D1YeZo29iS4hIY" />
      {/* 谷歌广告*/}
      <Script
        src={'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031326139722537'}
        crossOrigin={'anonymous'} async={true}
      />
      {/* 百度联盟验证*/}
      <meta name="baidu_union_verify" content="50312ad0c63983b3fe6c2e2a6e10c386"/>
    </Head>
  );
}
