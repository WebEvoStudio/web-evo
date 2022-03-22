import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import {Container} from '@mui/material';
import BlogRequests from '../core/requests/blog.requests';
const Search: NextPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  useEffect(() => {
    BlogRequests.search('git').then((res) => {
      console.log(res);
      setBlogs(res);
    });
  }, []);
  return (
    <div>
      <h1>Search</h1>
      <Container maxWidth={'md'}>
        {blogs.map((blog, index) => (
          <div key={index}>{blog['title']}</div>
        ))}
      </Container>
    </div>
  );
};
export default Search;
