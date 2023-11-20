'use client';
import React from 'react';
import EditorPage from '../components/editor';
import {useEffect, useState} from 'react';
import axios from 'axios';

export const ModifyBlog = ({id}: {id: string}) => {
  const [blog, setBlog] = useState({title: '', markContent: ''});
  useEffect(() => {
    if (id) {
      const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
      const path = 'blogs';
      const url = `${host}${path}/${id}`;
      axios.get(url).then(({data}) => {
        setBlog({title: data.title, markContent: data.markContent});
      });
    }
  }, [id]);
  return (
    <div>
      {blog.title !== '' ? <EditorPage title={blog.title} value={blog.markContent} id={id?.toString()}/> : ''}
    </div>
  );
};
