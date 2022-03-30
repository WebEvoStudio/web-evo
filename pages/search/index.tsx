import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import {Container, Paper, Skeleton} from '@mui/material';
import BlogRequests from '../../core/requests/blog.requests';
import Link from 'next/link';
import styles from '../../styles/blog.module.scss';
import Markdown from '../../core/unit/markdown';
import {useRouter} from 'next/router';
import CommonHead from '../../components/common-head';
import Empty from '../../components/empty';

const Index: NextPage = () => {
  const {query} = useRouter().query;
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    if (query) BlogRequests.search(query.toString()).then((res) => setBlogs(res));
  }, [query]);
  return (
    <div>
      <CommonHead title={`${query} - 搜索 - Web开发者中心`}/>
      <Container maxWidth={'md'} sx={{minHeight: 'calc(100vh - 56px)', display: 'flex', flexDirection: 'column'}}>
        <h1>Search</h1>
        {blogs.map((blog, index) => (
          <Link href={`/blogs/${blog['_id']}`} key={index}>
            <Paper elevation={1} sx={{margin: '10px 0'}}>
              <div className={styles['blog-item']} key={index}>
                <span className={styles['blog-title']}>{blog.title}</span>
                <div className={styles['blog-description']}>
                  {Markdown.intercept(blog.mark_content, 155)}
                </div>
                <Skeleton variant="rectangular"/>
              </div>
            </Paper>
          </Link>
        ))}
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {!blogs.length ? <Empty/> : null}
        </div>
      </Container>
    </div>
  );
};
export default Index;
