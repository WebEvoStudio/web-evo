import Link from 'next/link';
import React from 'react';
import styles from '../styles/blog.module.scss';
import CommonHead from '../components/common-head';
import axios from 'axios';
import Markdown from '../core/unit/markdown';
/**
 * Blog Page
 * @return {JSX.Element}
 */
function Blog({blogs}: {blogs: any[]}) {
  return (
    <div>
      <CommonHead title={'獠 - 如果想生存的话，什么都要学'}/>
      <div className={styles.page}>
        <div className={styles['blog-wrapper']}>
          {blogs.map((blog, index) => (
            <Link href={`/blogs/${blog['_id']}`} key={index}>
              <div className={styles['blog-item']} key={index}>
                <span className={styles['blog-title']}>{blog.title}</span>
                <div className={styles['blog-description']}>
                  {Markdown.intercept(blog.mark_content, 155)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
Blog.getInitialProps = async (ctx: any) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs`;
  const res = await axios.get(url);
  return {blogs: res.data};
};
export default Blog;
