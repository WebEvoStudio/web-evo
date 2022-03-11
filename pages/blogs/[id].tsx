import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import style from '../../styles/blog.module.scss';
import CommonHead from "../../components/common-head";
/**
 * blog detail page
 * @return {React.ReactElement}
 */
export default function BlogDetail() {
  const blog = require('../../src/assets/data/blog.json')[0];
  return (
      <div>
        <CommonHead title={blog.title} description={blog.dependencies}/>
        <div className={style['blog-detail']}>
          <div className={style['blog-content']}>
            <ReactMarkdown>
              {blog.mark_content ? blog.mark_content : ''}
            </ReactMarkdown>
          </div>
        </div>
      </div>
  );
}
