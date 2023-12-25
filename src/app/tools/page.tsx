import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {countryCode, weiboVideoSpider} from '@/core/libs/images';
import Image from 'next/image';
import Link from 'next/link';
import {Metadata} from 'next';
import {commonMetadata} from '@/core/config/main.config';

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${commonMetadata.title} - 工具`,
};
export default async function ToolsPage() {
  const tools = [
    {
      id: 1,
      title: '国家代码',
      desc: '国家地区代码或称国家地区编码（英语：country codes），简称国码，是用来标志国家的一组缩写或符号，在国家地区代码的标准化及实务上，有多种国际公认的国家和其领土代码。',
      src: '/tools/country-code',
      poster: countryCode,
    },
    {
      id: 2,
      title: '微博短视频无水印解析',
      desc: '通过抓包微博官方数据，分析得到数据接口。提供通过微博短视频的分享链接，获取无水印版视频地址的在线播放与下载服务。',
      src: '/tools/weibo-video-spider',
      poster: weiboVideoSpider,
    },
  ];
  return (
    <Container maxWidth={'lg'} sx={{p: 2}}>
      <Grid container spacing={2} rowSpacing={2}>
        {tools.map(({id, title, src, desc, poster}) => (
          <Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <CardMedia>
                {poster ? <Image src={poster} alt={''} layout={'responsive'}/> : null }
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    'position': 'relative',
                    'lineHeight': '20px',
                    'height': '60px',
                    'overflow': 'hidden',
                  }}
                >
                  {desc}
                </Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Share</Button>*/}
                <Link href={src}>
                  <Button size="small">打开</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
