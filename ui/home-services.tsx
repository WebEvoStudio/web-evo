'use client';
import {Card, CardContent, Grid, Typography, Button} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {services} from '../core/libs/services';
import {useRouter} from 'next/navigation';
import RippleBox from './components/ripple-box';

const HomeServices = ({isDesc}: {isDesc: boolean} = {isDesc: false}) => {
  const router = useRouter();
  const toServices = () => {
    !isDesc && router.push('/services');
  };
  return (
    <Grid container spacing={2}>
      {services.map((service, index) => (
        <Grid item key={index} xs={12} md={6} onClick={() => toServices()}>
          <RippleBox ripple={!isDesc}>
            <Card sx={{width: '100%'}}>
              <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <RippleBox ripple={isDesc}>
                  <Image src={service.image} alt={service.title} height={80}></Image>
                </RippleBox>
                <Typography variant={'h6'} sx={{mt: 2}}>{service.title}</Typography>
                {isDesc && <Typography variant={'body2'} sx={{mt: 2}}>{service.description}</Typography>}
              </CardContent>
            </Card>
          </RippleBox>
        </Grid>
      ))}
    </Grid>
  );
};
export default HomeServices;
