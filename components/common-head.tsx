import Head from "next/head";
import React from "react";

export default function CommonHead(props: {title?: string, description?: string}) {
  return (
      <Head>
        <link rel="icon" href={'/favicon.ico'} />
        <title>{props.title||'獠 - 全栈web开发者'}</title>
        <meta name={'description'} content={props.description||'学无止境'}/>
        {/* 百度验证*/}
        <meta name="baidu-site-verification" content="code-yx2HQhygQo" />
        {/* 必应验证*/}
        <meta name="msvalidate.01" content="AB78A0C987D3AEA34B969889512FF33E" />
        {/*谷歌验证*/}
        <meta name="google-site-verification" content="4rS5gjy4-tFOdJO4HvDg0_E4QNcB1D1YeZo29iS4hIY" />
        {/*谷歌广告*/}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1031326139722537" crossOrigin="anonymous"/>
      </Head>
  );
}
