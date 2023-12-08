'use client';
import React from 'react';
import HomeServices from '../home-services';
import {Container} from '@mui/material';

const Services = () => {
  return (
    <Container maxWidth={'lg'}>
      <HomeServices isDesc={true}/>
    </Container>
  );
};
export default Services;
