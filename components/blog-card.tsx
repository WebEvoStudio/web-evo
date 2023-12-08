import React, {useMemo, useState} from 'react';
import styles from '../styles/blog.module.scss';
import {Box, Paper} from '@mui/material';
import Markdown from '../core/unit/markdown';
import {AccessTime, VisibilityOutlined} from '@mui/icons-material';
import moment from 'moment';
import Link from 'next/link';
import Image, {ImageLoader} from 'next/image';
const BlogCard = ({blog}: any) => {
  const [elevation, setElevation] = useState(1);
  const loader: ImageLoader = ({src}) => 'https://' + src;
  const poster = (blog: any) => {
    if (Markdown.getImgUrl(blog.markContent).length) {
      const url = Markdown.getImgUrl(blog.markContent)[0];
      const src = url.split('://')[1];
      return (
        <Box sx={{
          width: {xs: 'calc(100% + 20px)', sm: '100px'},
          height: {xs: '160px', sm: '100px'},
          position: 'relative',
          background: '#eee',
          borderRadius: '5px',
          margin: {xs: '0 -10px', sm: 0},
          marginTop: {xs: '-10px', sm: 0},
          ml: {xs: '-10px', sm: '10px'},
          mb: {xs: '10px', sm: 0},
        }}>
          <Image alt={blog.title} loader={loader} src={src} layout={'fill'} objectFit={'contain'}/>
        </Box>
      );
    }
  };
  const titleStyle = useMemo(() => ({
    color: elevation === 1 ? '#000' : '#00B0FF',
  }), [elevation]);
  return (
    <Link href={`/blogs/${blog['_id']}`} passHref>
      <Paper
        elevation={elevation}
        sx={{margin: '10px 0', padding: '0 10px'}}
        onMouseEnter={() => setElevation(5)}
        onMouseLeave={() => setElevation(1)}
      >
        <div className={styles['blog-item']}>
          <Box sx={{flex: 1, width: {xs: '100%', sm: 'auto'}}}>
            <span className={styles['blog-title']} style={titleStyle}>{blog.title}</span>
            <div className={styles['blog-description']}>
              {Markdown.intercept(blog.markContent, 155)}
            </div>
            <Box sx={{
              display: 'flex',
              justifyContent: {xs: 'space-between', sm: 'flex-start'},
            }}>
              <div className={styles['blog-info']}>
                <AccessTime fontSize={'small'}/>
                <span>{moment(blog.createTime).format('yyyy-MM-DD')}</span>
              </div>
              <div className={styles['blog-info']}>
                <VisibilityOutlined fontSize={'small'}/>
                {/* 随机显示浏览量 */}
                <span>{blog.viewCount}</span>
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
