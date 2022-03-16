import React, {useEffect, useState} from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';
import axios from 'axios';
import EditorPage from '../../editor';
import CommonHead from '../../../components/common-head';

const BlogsModify: NextPage = () => {
  const {id} = useRouter().query;
  const title = '修改文章';
  const [blog, setBlog] = useState({title: '', mark_content: ''});
  useEffect(() => {
    if (id) {
      console.log(id);
      const url = `${process.env.NEXT_PUBLIC_BASE_URL}api/blogs?id=${id}`;
      axios.get(url).then(({data}) => {
        console.log(data);
        setBlog(data);
      });
    }
  }, [id]);
  return (
    <div>
      <CommonHead title={title}/>
      <EditorPage title={blog.title} value={blog.mark_content}/>
    </div>
  );
};
export default BlogsModify;
