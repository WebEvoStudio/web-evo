import Link from 'next/link';
import React, {useEffect} from 'react';
import styles from '../styles/blog.module.scss';
import CommonHead from '../components/common-head';
import axios from 'axios';
import Markdown from '../core/unit/markdown';
/**
 * Blog Page
 * @return {JSX.Element}
 */
export default function Blog() {
  const [blogs, setBlogs] = React.useState<any[]>([]);
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs`;
    axios.get(url).then((res) => {
      console.log(res.data);
      setBlogs(res.data);
    });
  }, []);
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
