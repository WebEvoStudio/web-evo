import React from 'react';
import ReactMarkdown from 'react-markdown';
import style from '../../styles/blog.module.scss';
import CommonHead from '../../components/common-head';
import axios from 'axios';
import Markdown from '../../core/unit/markdown';
import {Box, Container} from '@mui/material';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';
/**
 * blog detail page
 * @return {React.ReactElement}
 */
function BlogDetail({blog}: {blog: {title: string, mark_content: string}}) {
  const host: string = process.env.NEXT_PUBLIC_SITE_URL as string;
  const content = Markdown.keywordToLink(blog.mark_content, host);
  return (
    <Box sx={{background: '#f4f5f5'}}>
      <Container maxWidth={'md'}>
        <div className={style['blog']}>
          <CommonHead title={blog.title} description={Markdown.intercept(blog.mark_content, 100)}/>
          <div className={style['blog-detail']}>
            <div className={style['blog-title']}>
              <h1>{blog.title}</h1>
            </div>
            <div className={style['blog-content']}>
              <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}
BlogDetail.getInitialProps = async (ctx: any) => {
  const {id} = ctx.query;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs?id=${id}`;
  const res = await axios.get(url);
  return {blog: res.data};
};
export default BlogDetail;
