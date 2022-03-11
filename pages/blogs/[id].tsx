import React from 'react';
import ReactMarkdown from 'react-markdown';
import style from '../../styles/blog.module.scss';
/**
 * blog detail page
 * @return {React.ReactElement}
 */
export default function BlogDetail() {
  const blog = require('../../src/assets/data/blog.json')[0];
  return (
    <div className={style['blog-detail']}>
      <div className={style['blog-content']}>
        <ReactMarkdown>
          {blog.mark_content ? blog.mark_content : ''}
        </ReactMarkdown>
      </div>
    </div>
  );
}
