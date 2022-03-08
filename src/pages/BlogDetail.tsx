import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Blog.scss';
/**
 * blog detail page
 * @return {React.ReactElement}
 */
export default function BlogDetail() {
  const blog = require('../assets/data/blog.json')[0];
  return (
    <div className={'blog-detail'}>
      <div className="blog-content">
        <ReactMarkdown>
          {blog.mark_content ? blog.mark_content : ''}
        </ReactMarkdown>
      </div>
    </div>
  );
}
