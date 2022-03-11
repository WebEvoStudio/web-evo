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
      </Head>
  );
}
