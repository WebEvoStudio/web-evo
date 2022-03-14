import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import style from '../../styles/blog.module.scss';
import CommonHead from '../../components/common-head';
import {useRouter} from 'next/router';
import axios from 'axios';
import {message} from 'antd';
import Markdown from '../../core/unit/markdown';
/**
 * blog detail page
 * @return {React.ReactElement}
 */
export default function BlogDetail() {
  const {id} = useRouter().query;
  const [blog, setBlog] = useState({title: '', description: '', mark_content: ''});
  useEffect(() => {
    console.log(id);
    if (id) {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs?id=${id}`;
      axios.get(url).then((res) => {
        console.log(res.data);
        setBlog(res.data);
        console.log(blog);
      }).catch((err) => message.error(err.message));
    }
  }, [id]);
  return (
    <div>
      <CommonHead title={blog.title} description={Markdown.intercept(blog.mark_content, 100)}/>
      <div className={style['blog-detail']}>
        <div className={style['blog-content']}>
          <ReactMarkdown>
            {blog.mark_content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
