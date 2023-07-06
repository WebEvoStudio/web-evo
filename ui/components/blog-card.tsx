'use client';
import React from 'react';
import {Avatar, Box, Card, CardMedia, Typography} from '@mui/material';
import Markdown from '../../core/unit/markdown';
import {Images} from '../../core/libs/images';
import moment from 'moment';
import Link from 'next/link';
export const BlogCard = (props: {blog: any}) => {
  const {blog} = props;
  const Poster = ({markContent}: any) => {
    if (Markdown.getImgUrl(markContent).length) {
      const url = Markdown.getImgUrl(markContent)[0];
      // const src = url.split('://')[1];
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
  };
  return (
    <Box component={'article'} sx={{height: '100%'}}>
      <Link href={`/blogs/${blog['_id']}`} style={{}}>
        <Card sx={{my: 0, p: 2, height: '100%'}}>
          <Poster markContent={blog.markContent}/>
          <Typography
            variant={'h2'}
            fontSize={'20px'}
            sx={{mt: 2}}
          >{blog.title}</Typography>
          <Typography
            sx={{mt: 2}}
          >{Markdown.intercept(blog.markContent, 155)}</Typography>
          <Box sx={{mt: 2, display: 'flex'}}>
            <Avatar
              src={Images.undrawDeveloperActivity.default.src}
              sx={{width: 32, height: 32}}
            ></Avatar>
            <Box sx={{ml: 1}}>
              <Typography fontSize={12}>Web Evo</Typography>
              <Typography
                fontSize={12}
              >{moment(blog.createTime).format('yyyy-MM-DD')}</Typography>
            </Box>
          </Box>
        </Card>
      </Link>
    </Box>
  );
};
