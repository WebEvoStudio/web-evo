import Link from 'next/link';
import React, {useEffect} from 'react';
import styles from '../styles/blog.module.scss';
import CommonHead from '../components/common-head';
import axios from 'axios';
/**
 * Blog Page
 * @return {JSX.Element}
 */
export default function Blog() {
  const abstractFn = (res: string) => {
    const str = res.replace(/(\*\*|__)(.*?)(\*\*|__)/g, '') // 全局匹配内粗体
        .replace(/!\[[\s\S]*?]\([\s\S]*?\)/g, '') // 全局匹配图片
        .replace(/\[[\s\S]*?]\([\s\S]*?\)/g, '') // 全局匹配连接
        .replace(/<\/?.+?\/?>/g, '') // 全局匹配内html标签
        .replace(/(\*)(.*?)(\*)/g, '') // 全局匹配内联代码块
        .replace(/`{1,2}[^`](.*?)`{1,2}/g, '') // 全局匹配内联代码块
        .replace(/```([\s\S]*?)```[\s]*/g, '') // 全局匹配代码块
        .replace(/~~(.*?)~~/g, '') // 全局匹配删除线
        .replace(/[\s]*[-*+]+(.*)/g, '') // 全局匹配无序列表
        .replace(/[\s]*[0-9]+\.(.*)/g, '') // 全局匹配有序列表
        .replace(/(#+)(.*)/g, '') // 全局匹配标题
        .replace(/(>+)(.*)/g, '') // 全局匹配摘要
        .replace(/\r\n/g, '') // 全局匹配换行
        .replace(/\n/g, '') // 全局匹配换行
        .replace(/\s/g, ''); // 全局匹配空字符;
    return str.slice(0, 155);
  };
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
                  {abstractFn(blog.mark_content)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
