import React from 'react';
import styles from '../../styles/blog.module.scss';
import axios from 'axios';
import {Container} from '@mui/material';
import CommonHead from '../../components/common-head';
import BlogCard from '../../components/blog-card';

/**
 * Blog Page
 * @return {JSX.Element}
 */
function BlogsIndex({blogs}: {blogs: any[]}) {
  return (
    <Container maxWidth={'md'}>
      <div>
        <CommonHead title={'獠 - 如果想生存的话，什么都要学'}/>
        <div>
          <div className={styles['blog-wrapper']}>
            {blogs.map((blog, index) => (<BlogCard key={index} blog={blog}/>))}
          </div>
        </div>
      </div>
    </Container>
  );
}
BlogsIndex.getInitialProps = async () => {
  const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
  const path = 'blogs';
  const url = `${host}${path}`;
  const res = await axios.get(url);
  return {blogs: res.data};
};
export default BlogsIndex;
