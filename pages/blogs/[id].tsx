import React from 'react';
import ReactMarkdown from 'react-markdown';
import style from '../../styles/blog.module.scss';
import CommonHead from '../../components/common-head';
import axios from 'axios';
import Markdown from '../../core/unit/markdown';
/**
 * blog detail page
 * @return {React.ReactElement}
 */
function BlogDetail({blog}: {blog: {title: string, mark_content: string}}) {
  return (
    <div className={style['blog']}>
      <CommonHead title={blog.title} description={Markdown.intercept(blog.mark_content, 100)}/>
      <div className={style['blog-detail']}>
        <div className={style['blog-title']}>
          <h1>{blog.title}</h1>
        </div>
        <div className={style['blog-content']}>
          <ReactMarkdown>
            {blog.mark_content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
BlogDetail.getInitialProps = async (ctx: any) => {
  const {id} = ctx.query;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs?id=${id}`;
  const res = await axios.get(url);
  return {blog: res.data};
};
export default BlogDetail;
