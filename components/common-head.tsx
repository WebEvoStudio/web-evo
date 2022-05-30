import Head from 'next/head';
import React from 'react';

/**
 * CommonHead
 * @param {any} props
 * @constructor
 */
export default function CommonHead(props: {title?: string, description?: string, keywords?: string}) {
  const title = '獠 - Web开发人员中心';
  const description = title + ' 是一个帮助web开发者成长的社区。我们以技术文章为核心的产品形态，为开发者提供纯粹、高质的技术文章。';
  return (
    <Head>
      <title>{props.title||title}</title>
      <meta name={'description'} content={props.description||description}/>
      <meta name="viewport" content="initial-scale=1, width=device-width, maximum-scale=1.0, user-scalable=0"/>
      {/* 百度验证*/}
      <meta name="baidu-site-verification" content="code-yx2HQhygQo" />
      {/* 必应验证*/}
      <meta name="msvalidate.01" content="AB78A0C987D3AEA34B969889512FF33E" />
      {/* 谷歌验证*/}
      <meta name="google-site-verification" content="4rS5gjy4-tFOdJO4HvDg0_E4QNcB1D1YeZo29iS4hIY" />
      {/* 百度联盟验证*/}
      <meta name="baidu_union_verify" content="50312ad0c63983b3fe6c2e2a6e10c386"/>
    </Head>
  );
}
