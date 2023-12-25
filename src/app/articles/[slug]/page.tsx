import React from 'react';
import {allPosts} from 'contentlayer/generated';
import {Container} from '@mui/material';
import Article from '../../../ui/components/Article';
import {commonMetadata} from "@/core/config/main.config";


export const generateStaticParams = async () => allPosts.map((post) => ({slug: post._raw.flattenedPath}));

export const generateMetadata = ({params}: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return {
    ...commonMetadata,
    title: `${commonMetadata.title} -  ${post.title}`,
  };
};

const PostLayout = ({params}: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return (
    <Container maxWidth={'md'} sx={{px: 2}}>
      <Article {...post}/>
    </Container>
  );
};

export default PostLayout;
