import React, {useEffect, useMemo, useState} from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';
import axios from 'axios';
import EditorPage from '../../../components/editor';
import CommonHead from '../../../components/common-head';

const BlogsModify: NextPage = () => {
  const {id} = useRouter().query;
  const [blog, setBlog] = useState({title: '', mark_content: ''});
  const title = useMemo(() => blog.title ? `修改文章 - ${blog.title}` : '加载中...', [blog]);
  useEffect(() => {
    if (id) {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs?id=${id}`;
      axios.get(url).then(({data}) => {
        setBlog({title: data.title, mark_content: data.mark_content});
      });
    }
  }, [id]);
  return (
    <div>
      <CommonHead title={title}/>
      {blog.title !== '' ? <EditorPage title={blog.title} value={blog.mark_content} id={id?.toString()}/> : ''}
    </div>
  );
};
export default BlogsModify;
