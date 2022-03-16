import React from 'react';
import {NextPage} from 'next';
import EditorPage from '../editor';
import CommonHead from '../../components/common-head';

const BlogPublish: NextPage = () => {
  const title = '发布文章';
  return (
    <div>
      <CommonHead title={title}/>
      <EditorPage/>
    </div>
  );
};

export default BlogPublish;
