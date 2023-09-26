'use client';
import React from 'react';
import {Box, Typography} from '@mui/material';

const Section = (props: {
  children?: React.ReactNode,
  first?: boolean,
  title?: string,
  desc?: string | string[] |React.ReactNode,
  backgroundColor?: string
}) => {
  const {
    children,
    title = 'Title',
    desc = 'Description',
    backgroundColor = 'transparent',
    first = false,
  } = props;
  const getDesc = (desc: string | string[] | React.ReactNode) => {
    if (Array.isArray(desc)) {
      return (
        <Typography variant={'body1'} sx={{mb: '56px'}}>
          {desc.map((it, index) => (<span key={index} >{it}<br/></span>))}
        </Typography>
      );
    }
    return (<Typography variant={'body1'} sx={{mb: '56px'}}>{desc}</Typography>);
  };
  return (
    <section>
      <Box sx={{paddingTop: '64px', paddingBottom: '20px', backgroundColor}}>
        <Typography variant={first ? 'h1' : 'h2'} fontSize={32} sx={{marginBottom: '48px'}} >{title}</Typography>
        {getDesc(desc)}
        {children??''}
      </Box>
    </section>
  );
};
export default Section;
