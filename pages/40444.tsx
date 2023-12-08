import React from 'react';
import Image from 'next/image';
import {Images} from '../core/libs/images';
import {Box, Button, Typography} from '@mui/material';
import {useRouter} from 'next/router';
const Custom404 = () => {
  const router = useRouter();
  const pageSx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
  };
  const backToHome = () => {
    router.replace('/').then();
  };
  return (
    <Box sx={pageSx}>
      <Box sx={{width: '260px'}}>
        <Image alt={''} src={Images.undrawPageNotFound}/>
      </Box>
      <Typography variant={'h4'} sx={{mt: 4}}>Page not found</Typography>
      <Button variant={'contained'} sx={{mt: 4}} onClick={backToHome}>Back to home</Button>
    </Box>
  );
};
export default Custom404;
