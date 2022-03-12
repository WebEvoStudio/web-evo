import Head from 'next/head';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import style from '../../styles/blog.module.scss';
import CommonHead from "../../components/common-head";
import {useRouter} from "next/router";
/**
 * blog detail page
 * @return {React.ReactElement}
 */
export default function BlogDetail() {
  const {id} = useRouter().query;
  const blog = require('../../src/assets/data/blog.json').find((item: any) => item.id === id);
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
