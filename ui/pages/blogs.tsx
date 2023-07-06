'use client';
import React from 'react';
import {Container, Box, Grid} from '@mui/material';
import Section from '../components/section';
import {BlogCard} from '../components/blog-card';

/**
 * Blog Page
 * @return {JSX.Element}
 */
function BlogsIndex({blogs}: {blogs: any[]}) {
  return (
    <Box>
      <Box sx={{backgroundColor: '#303136'}}>
        <Container maxWidth={'lg'}>
          <Section first={true} title='博客' desc='我们为开发人员和客户提供的最新消息和案例' backgroundColor='#303136'/>
        </Container>
      </Box>
      <Container maxWidth={'lg'}>
        <div>
          <div>
            <Grid container sx={{py: 2}} spacing={2}>
              {blogs.map((blog, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <BlogCard key={index} blog={blog}/>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </Box>
  );
}
export default BlogsIndex;
