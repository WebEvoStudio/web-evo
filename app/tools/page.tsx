import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Typography} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {countryCode} from '../../core/libs/images';
import Image from 'next/image';
import Link from 'next/link';
export default async function ToolsPage() {
  const tools = [
    {
      id: 1,
      title: '国家代码',
      desc: '国家地区代码或称国家地区编码（英语：country codes），简称国码，是用来标志国家的一组缩写或符号，在国家地区代码的标准化及实务上，有多种国际公认的国家和其领土代码。',
      src: '/tools/country-code',
      poster: countryCode,
    },
  ];
  return (
    <Container maxWidth={'lg'} sx={{p: 2}}>
      <Grid container spacing={2} rowSpacing={2}>
        {tools.map(({id, title, src, desc, poster}) => (
          <Grid key={id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card>
              <CardMedia>
                <Image src={countryCode} alt={''} layout={'responsive'}/>
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
