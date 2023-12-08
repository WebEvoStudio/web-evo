import React from 'react';
import {Box} from '@mui/material';

const DashboardLayout = (props: {children: React.ReactNode}) => {
  const {children} = props;
  return (
    <Box sx={{height: 'calc(100vh)', boxSizing: 'border-box', p: 2}}>
      {children}
    </Box>
  );
};
export default DashboardLayout;
