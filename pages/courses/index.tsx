import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import Header from '../../components/header';

/**
 * 课程
 * @constructor
 */
function CoursesIndex() {
  return (
    <Container maxWidth={'md'}>
      <Header></Header>
      <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}} mb={4}>
          <Typography variant={'h4'}>课程</Typography>
        </Box>
        <Typography variant={'body1'}>探索我们的结构化学习路径，发掘您为现代网络构建时的所有须知事项。</Typography>
      </Box>
    </Container>
  );
}
export default CoursesIndex;
