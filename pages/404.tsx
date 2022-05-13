import React from 'react';
import Image from 'next/image';
import {Images} from '../core/libs/images';
import {Box, Typography} from '@mui/material';
const Custom404 = () => {
  const pageSx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    position: 'relative',
    bottom: '64px',
  };
  return (
    <Box sx={pageSx}>
      <Box sx={{width: '260px'}}>
        <Image src={Images.undrawPageNotFound}/>
      </Box>
      <Typography variant={'h4'}>Page not found</Typography>
    </Box>
  );
};
export default Custom404;
