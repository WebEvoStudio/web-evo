import React from 'react';
import {Container} from '@mui/material';
import {Images} from '../core/libs/images';
import Image from 'next/image';

/**
 * Contact page
 * @return {React.ReactElement}
 */
export default function Contact() {
  return (
    <Container maxWidth={'md'}>
      <Image src={Images.undrawContactUs}/>
    </Container>
  );
}
