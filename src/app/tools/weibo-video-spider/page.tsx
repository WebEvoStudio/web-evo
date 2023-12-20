import React from 'react';
import {Container} from '@mui/material';
import {Metadata} from 'next';
import {commonMetadata} from '@/core/config/main.config';
import Client from './client';

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${commonMetadata.title} - 微博短视频无水印解析`,
};
export default function WeiboVideoSpiderPage() {
  return (
    <Container maxWidth={'md'}>
      <Client/>
      <a href="https://www.dpbolvw.net/click-101060783-10754734" target="_top">
        <img src="https://www.lduhtrp.net/image-101060783-10754734" width="200" height="200"
          alt="Press Release Distribution 24-7PressRelease.com"/></a>
    </Container>
  );
}
