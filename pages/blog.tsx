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
      return <Image src={Markdown.getImgUrl(blog.mark_content)[0]} width={100} height={100}/>;
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
                <Paper elevation={1} sx={{margin: '10px 0'}}>
                  <div className={styles['blog-item']} key={index}>
                    {poster(blog)}
                    <span className={styles['blog-title']}>{blog.title}</span>
                    <div className={styles['blog-description']}>
                      {Markdown.intercept(blog.mark_content, 155)}
                    </div>
                    <Box sx={{display: 'flex'}}>
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
