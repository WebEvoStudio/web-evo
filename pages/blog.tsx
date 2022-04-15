import Link from 'next/link';
import React from 'react';
import styles from '../styles/blog.module.scss';
import CommonHead from '../components/common-head';
import axios from 'axios';
import Markdown from '../core/unit/markdown';
import {Box, Container, Paper} from '@mui/material';
import {AccessTime, VisibilityOutlined} from '@mui/icons-material';
import moment from 'moment';
import Image from 'next/image';
/**
 * Blog Page
 * @return {JSX.Element}
 */
function Blog({blogs}: {blogs: any[]}) {
  const poster = (blog: any) => {
    if (Markdown.getImgUrl(blog.mark_content).length) {
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
          <Image src={Markdown.getImgUrl(blog.mark_content)[0]} layout={'fill'} objectFit={'contain'}/>
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
            {blogs.map((blog, index) => (
              <Link href={`/blogs/${blog['_id']}`} key={index} passHref>
                <Paper elevation={1} sx={{margin: '10px 0', padding: '0 10px'}}>
                  <div className={styles['blog-item']} key={index}>
                    <Box sx={{flex: 1}}>
                      <span className={styles['blog-title']}>{blog.title}</span>
                      <div className={styles['blog-description']}>
                        {Markdown.intercept(blog.mark_content, 155)}
                      </div>
                      <Box sx={{display: 'flex', justifyContent: {xs: 'space-between', sm: 'flex-start'}}}>
                        <div className={styles['blog-info']}>
                          <AccessTime fontSize={'small'}/>
                          <span>{moment(blog.create_time).format('yyyy-MM-DD')}</span>
                        </div>
                        <div className={styles['blog-info']}>
                          <VisibilityOutlined fontSize={'small'}/>
                          {/* 随机显示浏览量 */}
                          <span>{Math.floor(Math.random() * 100)}</span>
                        </div>
                      </Box>
                    </Box>
                    {poster(blog)}
                  </div>
                </Paper>
              </Link>
            ))}
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
