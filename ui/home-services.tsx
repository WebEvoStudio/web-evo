'use client';
import {ButtonBase, Card, CardContent, Grid, Typography, Button} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import {services} from '../core/libs/services';
import {useRouter} from 'next/navigation';

const HomeServices = ({isDesc}: {isDesc?: boolean} = {isDesc: false}) => {
  const router = useRouter();
  const toServices = () => {
    !isDesc && router.push('/services');
  };
  return (
    <Grid container spacing={2}>
      {services.map((service, index) => (
        <Grid item key={index} xs={12} md={6} onClick={() => toServices()}>
          <Card
            component={Button}
            sx={{width: '100%', height: '100%'}}
            disableRipple={isDesc}
            disableTouchRipple={isDesc}
          >
            <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <ButtonBase disableRipple={!isDesc} disableTouchRipple={!isDesc}>
                <Image src={service.image} alt={service.title} height={80}></Image>
              </ButtonBase>
              <Typography variant={'h6'} sx={{mt: 2}}>{service.title}</Typography>
              {isDesc && <Typography variant={'body2'} sx={{mt: 2}}>{service.description}</Typography>}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default HomeServices;
