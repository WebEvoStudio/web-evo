'use client';
import React from 'react';
import styles from '../../styles/blog.module.scss';
import {Container, Box} from '@mui/material';
import BlogCard from '../../components/blog-card';
import Section from '../components/section';

/**
 * Blog Page
 * @return {JSX.Element}
 */
function BlogsIndex({blogs}: {blogs: any[]}) {
  return (
    <Box>
      <Box sx={{backgroundColor: '#303136'}}>
        <Container maxWidth={'md'}>
          <Section first={true} title='博客' desc='我们为开发人员和客户提供的最新消息和案例' backgroundColor='#303136'/>
        </Container>
      </Box>
      <Container maxWidth={'md'}>
        <div>
          <div>
            <div className={styles['blog-wrapper']}>
              {blogs.map((blog, index) => (<BlogCard key={index} blog={blog}/>))}
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}
export default BlogsIndex;
