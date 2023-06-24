'use client';
import React from 'react';
import {Box, Typography} from '@mui/material';

const Section = (props: {children: React.ReactNode, title?: string, desc?: string}) => {
  const {children, title = 'Title', desc = 'Description'} = props;
  return (
    <section>
      <Box sx={{paddingTop: '64px', paddingBottom: '20px'}}>
        <Typography variant={'h1'} fontSize={32} sx={{marginBottom: '48px'}}>{title}</Typography>
        <Typography variant={'body1'} sx={{mb: '56px'}}>{desc}</Typography>
        {children}
      </Box>
    </section>
  );
};
export default Section;
