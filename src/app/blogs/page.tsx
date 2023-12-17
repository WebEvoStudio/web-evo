import React from 'react';
import BlogsIndex from '../../ui/pages/blogs';
import {Metadata} from 'next';
export const metadata: Metadata = {
  title: 'Web Evo - 博客',
};
const getBlogs = async () => {
  // const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
  // const path = 'blogs';
  // const url = `${host}${path}`;
  // const res = await fetch(url, {next: {revalidate: 3600}});
  // return res.json();
  return [];
};
const BlogsPage = async () => {
  const blogs = await getBlogs();
  return (<BlogsIndex blogs={blogs}/>);
};
export default BlogsPage;
