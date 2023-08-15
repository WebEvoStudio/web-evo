'use client';
import React from 'react';
import {Box, Typography} from '@mui/material';

const Section = (props: {
  children?: React.ReactNode,
  first?: boolean,
  title?: string,
  desc?: string | React.ReactNode,
  backgroundColor?: string
}) => {
  const {
    children,
    title = 'Title',
    desc = 'Description',
    backgroundColor = 'transparent',
    first = false,
  } = props;
  return (
    <section>
      <Box sx={{paddingTop: '64px', paddingBottom: '20px', backgroundColor}}>
        <Typography variant={first ? 'h1' : 'h2'} fontSize={32} sx={{marginBottom: '48px'}}>{title}</Typography>
        <Typography variant={'body1'} sx={{mb: '56px'}}>{desc}</Typography>
        {children??''}
      </Box>
    </section>
  );
};
export default Section;
