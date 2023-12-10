'use client';
import {Viewer} from '@bytemd/react';
import React from 'react';
import {Post} from 'contentlayer/generated';
import {BytemdPlugin} from 'bytemd';
import frontmatter from '@bytemd/plugin-frontmatter';
import gfm from '@bytemd/plugin-gfm';
import highlightSsr from '@bytemd/plugin-highlight-ssr';
import style from '../../styles/blog.module.scss';

const Article = (post: Post) => {
  const plugins: BytemdPlugin[] = [
    frontmatter(),
    gfm(),
    highlightSsr(),
  ];
  return (
    <article data-clarity-region="article">
      <div className={style['blog']}>
        <div className={style['blog-detail']}>
          <h1 className={style['page-title']}>
            {post.title}
          </h1>
          <div className={style['article-body']}>
            <Viewer value={post.body.raw} plugins={plugins}/>
          </div>

        </div>
        {/* <time dateTime={post.date} className="mb-1 text-xs text-gray-600">*/}
        {/*  {format(parseISO(post.date), 'LLLL d, yyyy')}*/}
        {/* </time>*/}
        {/* <h1 className="text-3xl font-bold">{post.title}</h1>*/}
      </div>
      {/* <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{__html: post.body.html}}/>*/}
    </article>
  );
};
export default Article;
