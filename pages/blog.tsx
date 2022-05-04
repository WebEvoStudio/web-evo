import Link from 'next/link';
import React from 'react';
import styles from '../styles/blog.module.scss';
import CommonHead from '../components/common-head';
import axios from 'axios';
import {Container} from '@mui/material';
import BlogCard from '../components/blog-card';
import {ImageLoader} from 'next/dist/client/image';
/**
 * Blog Page
 * @return {JSX.Element}
 */
function Blog({blogs}: {blogs: any[]}) {
  const loader: ImageLoader = ({src, config}) => {
    return 'https://' + src;
  };
  const poster = (blog: any) => {
    if (Markdown.getImgUrl(blog.mark_content).length) {
      const url = Markdown.getImgUrl(blog.mark_content)[0];
      const src = url.split('://')[1];
      return (
        <Box sx={{
          width: {xs: 'calc(100% + 60px)', sm: '100px'},
          height: {xs: '160px', sm: '100px'},
          position: 'relative',
          background: '#eee',
          borderRadius: '5px',
          margin: {xs: '0 -30px', sm: 0},
          marginTop: {xs: '-20px', sm: 0},
        }}>
          <Image loader={loader} src={src} layout={'fill'} objectFit={'contain'}/>
        </Box>
      );
    }
  };
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
Blog.getInitialProps = async (ctx: any) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs`;
  const res = await axios.get(url);
  return {blogs: res.data};
};
export default Blog;
