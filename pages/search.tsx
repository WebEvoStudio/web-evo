import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import {Container, Paper, Skeleton} from '@mui/material';
import BlogRequests from '../core/requests/blog.requests';
import Link from 'next/link';
import styles from '../styles/blog.module.scss';
import Markdown from '../core/unit/markdown';
import {useRouter} from 'next/router';
const Search: NextPage = () => {
  const {query} = useRouter().query;
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    if (query) {
      BlogRequests.search(query.toString()).then((res) => {
        setBlogs(res);
      });
    }
  }, [query]);
  return (
    <div>
      <h1>Search</h1>
      <Container maxWidth={'md'}>
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
      </Container>
    </div>
  );
};
export default Search;
