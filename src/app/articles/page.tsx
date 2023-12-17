import React from 'react';
import {allPosts, Post} from 'contentlayer/generated';
import {compareDesc} from 'date-fns';
import Link from 'next/link';
import {Avatar, Box, Card, CardMedia, Container, Grid, Typography} from '@mui/material';
import Markdown from '../../core/unit/markdown';
import {Images} from '@/core/libs/images';
import moment from 'moment/moment';

const ArticleCard = (post: Post) => {
  const Poster = ({markContent}: any) => {
    if (Markdown.getImgUrl(markContent).length) {
      const url = Markdown.getImgUrl(markContent)[0];
      return (
        <CardMedia
          component={'img'}
          image={url}
          sx={{
            aspectRatio: '5/3',
            objectFit: 'cover',
          }}
        />
      );
    }
    return (<Box></Box>);
  };
  // console.log(post);
  return (
    <Box component={'article'} sx={{height: '100%'}}>
      <Link href={post.url}>
        <Card sx={{my: 0, p: 2, height: '100%'}}>
          <Poster markContent={post.body.raw}></Poster>
          <Typography
            variant={'h2'}
            fontSize={'20px'}
            sx={{mt: 2}}
          >{post.title}</Typography>
          <Typography
            sx={{mt: 2}}
          >{Markdown.intercept(post.body.raw, 155)}</Typography>
          <Box sx={{mt: 2, display: 'flex'}}>
            <Avatar
              src={Images.undrawDeveloperActivity.default.src}
              sx={{width: 32, height: 32}}
            ></Avatar>
            <Box sx={{ml: 1}}>
              <Typography fontSize={12}>Web Evo</Typography>
              <Typography
                fontSize={12}
              >{moment(post.date).format('yyyy-MM-DD')}</Typography>
            </Box>
          </Box>
        </Card>
      </Link>
      {/* <div className="mb-8">*/}
      {/*  <h2 className="mb-1 text-xl">*/}
      {/*    <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">*/}
      {/*      {post.title}*/}
      {/*    </Link>*/}
      {/*  </h2>*/}
      {/*  <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">*/}
      {/*    {format(parseISO(post.date), 'LLLL d, yyyy')}*/}
      {/*  </time>*/}
      {/* <div*/}
      {/*  className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"*/}
      {/*  dangerouslySetInnerHTML={{__html: post.body.html}}*/}
      {/* />*/}
      {/* </div>*/}
    </Box>
  );
};
export default async function ArticlesPage() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <Container maxWidth={'lg'}>
      <Grid container sx={{py: 2}} spacing={2}>
        {posts.map((post, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <ArticleCard key={idx} {...post} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
