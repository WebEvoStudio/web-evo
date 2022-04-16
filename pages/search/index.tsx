import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import {Box, Container, Paper, Skeleton} from '@mui/material';
import BlogRequests from '../../core/requests/blog.requests';
import {useRouter} from 'next/router';
import CommonHead from '../../components/common-head';
import Empty from '../../components/empty';
import BlogCard from '../../components/blog-card';

const Index: NextPage = () => {
  const {query} = useRouter().query;
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (query) {
      BlogRequests.search(query.toString()).then((res) => {
        setBlogs(res);
        setLoading(false);
      });
    }
  }, [query]);
  const LoadingContainer = (
    <>
      {[...Array(3)].map((_, index) => (
        <Paper sx={{padding: {xs: '10px', sm: '20px 30px'}}} key={index}>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            <Skeleton height={40} width={'30%'}/>
            <Skeleton height={20}/>
            <Skeleton height={20}/>
            <Skeleton height={20}/>
            <Skeleton height={30} width={'25%'}/>
          </Box>
          <Box sx={{display: {xs: 'block', sm: 'none'}}}>
            <Skeleton height={150} variant="rectangular"/>
            <Skeleton height={40}/>
            <Skeleton height={30}/>
          </Box>
        </Paper>
      ))}
    </>
  );
  const LoadedContainer = (
    <>
      {blogs.map((blog, index) => (<BlogCard key={index} blog={blog}/>))}
      <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {!blogs.length ? <Empty/> : null}
      </div>
    </>
  );
  return (
    <div>
      <CommonHead title={`${query} - 搜索 - Web开发者中心`}/>
      <Container maxWidth={'md'} sx={{minHeight: 'calc(100vh - 56px)', display: 'flex', flexDirection: 'column'}}>
        <h1>Search</h1>
        {loading ? LoadingContainer : LoadedContainer}
      </Container>
    </div>
  );
};
export default Index;
