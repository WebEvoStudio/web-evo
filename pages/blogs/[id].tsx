import Head from 'next/head';
import React, {useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import style from '../../styles/blog.module.scss';
import CommonHead from "../../components/common-head";
import {useRouter} from "next/router";
/**
 * blog detail page
 * @return {React.ReactElement}
 */
export default function BlogDetail() {
  // const [blog, setBlog] = React.useState({title: '', description: '', mark_content: ''});
  let blog = {title: '', description: '', mark_content: ''};
  const {id} = useRouter().query;
  if (id) {
    const blogs: any[] = require('../../src/assets/data/blog.json');
    blog = blogs.find((item: any) => item.id === id);
  }
  // useEffect(() => {
  //   console.log(blogs);
  //   console.log(id);
  //   console.log(typeof id);
  //   console.log(blogs.find(item => item.id === id));
  //   setBlog(blogs.find(item => item.id === id));
  //   // setBlog(require('../../src/assets/data/blog.json').find((item: any) => item.id === id));
  // }, [])
  return (
      <div>
        <CommonHead title={blog.title} description={blog.description}/>
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
