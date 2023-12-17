'use client';
import React from 'react';
import {ModifyBlog} from '@/ui/pages/modify-blog';

const ModifyBlogPage = (props: {params: {id: string}}) => {
  // console.log(props);
  const {params: {id}} = props;
  // const router = useRouter().query;
  console.log(id);
  return <ModifyBlog id={id}/>;
};
export default ModifyBlogPage;
