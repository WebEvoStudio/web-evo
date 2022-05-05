import React from 'react';
import styles from '../styles/blog.module.scss';
import {Box, Paper} from '@mui/material';
import Markdown from '../core/unit/markdown';
import {AccessTime, VisibilityOutlined} from '@mui/icons-material';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import {ImageLoader} from 'next/dist/client/image';
const BlogCard = ({blog}: any) => {
  const loader: ImageLoader = ({src, config}) => 'https://' + src;
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
    <Link href={`/blogs/${blog['_id']}`} passHref>
      <Paper elevation={1} sx={{margin: '10px 0', padding: '0 10px'}}>
        <div className={styles['blog-item']}>
          <Box sx={{flex: 1, width: {xs: '100%', sm: 'auto'}}}>
            <span className={styles['blog-title']}>{blog.title}</span>
            <div className={styles['blog-description']}>
              {Markdown.intercept(blog.mark_content, 155)}
            </div>
            <Box sx={{
              display: 'flex',
              justifyContent: {xs: 'space-between', sm: 'flex-start'},
            }}>
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
  );
};
export default BlogCard;
