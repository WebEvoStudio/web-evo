'use client';
import React from 'react';
import {Box, Button} from '@mui/material';

const RippleBox = ({children, ripple}: {children: React.ReactNode, ripple: boolean}) => {
  if (ripple) {
    return (
      <Box component={Button} sx={{width: '100%', padding: 0}}>
        {children}
      </Box>
    );
  } else {
    return (<Box>{children}</Box>);
  }
};

export default RippleBox;
