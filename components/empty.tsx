import React from 'react';
import Image from 'next/image';
import {Images} from '../core/libs/images';
import {Box} from '@mui/material';
const Empty = ({description}: {description?: string}) => {
  return (
    <Box sx={{textAlign: 'center'}}>
      <Box sx={{width: 200}}>
        <Image src={Images.undrawEmpty}/>
      </Box>
      <span>{description||'这里什么都没有'}</span>
    </Box>
  );
};
export default Empty;
