import React from 'react';
import style from '../../styles/blog.module.scss';
import CommonHead from '../../components/common-head';
import axios from 'axios';
import Markdown from '../../core/unit/markdown';
import {Box, Container} from '@mui/material';
import 'highlight.js/styles/github.css';
import 'bytemd/dist/index.min.css';
import {Viewer} from '@bytemd/react';
import {BytemdPlugin} from 'bytemd';
import frontmatter from '@bytemd/plugin-frontmatter';
import gfm from '@bytemd/plugin-gfm';
/**
 * blog detail page
 * @return {React.ReactElement}
 */
function BlogDetail({blog}: {blog: {title: string, markContent: string}}) {
  const host: string = process.env.NEXT_PUBLIC_SITE_URL as string;
  const content = Markdown.keywordToLink(blog.markContent, host);
  const plugins: BytemdPlugin[] = [
    frontmatter(),
    gfm(),
  ];
  return (
    <Box sx={{background: '#f4f5f5'}}>
      <Container maxWidth={'md'}>
        <div className={style['blog']}>
          <CommonHead title={blog.title + ' - Web Evolution'} description={Markdown.intercept(blog.markContent, 100)}/>
          <div className={style['blog-detail']}>
            <div className={style['blog-title']}>
              <h1>{blog.title}</h1>
            </div>
            <div className={style['blog-content']} data-clarity-region="article">
              <Viewer value={content} plugins={plugins}/>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}
BlogDetail.getInitialProps = async (ctx: any) => {
  const {id} = ctx.query;
  const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
  const path = 'blogs';
  const url = `${host}${path}/${id}`;
  const res = await axios.get(url);
  return {blog: res.data};
};
export default BlogDetail;
