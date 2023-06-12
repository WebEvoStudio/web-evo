import React, {useState} from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import CommonHead from '../../components/common-head';
import {School} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../ui/header';


/**
 * 课程
 * @constructor
 */
function CoursesIndex() {
  const [courses] = useState([
    {title: '测试1', description: '测试课程1', counter: 1, id: 1},
    {title: '测试2', description: '测试课程2', counter: 2, id: 2},
    {id: 3, title: '测试3', description: '测试课程3', counter: 3},
    {id: 4, title: 'cycle', description: 'cycle', counter: 4},
  ]);
  return (
    <Container maxWidth={'md'}>
      <CommonHead title={'课程 - WebEvolution'}/>
      <Header />
      <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 9}}>
        <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}} mb={4}>
          <Typography variant={'h4'}>课程</Typography>
        </Box>
        <Typography variant={'body1'}>探索我们的结构化学习路径，发掘您为现代网络构建时的所有须知事项。</Typography>
      </Box>
      <Grid container spacing={{xs: 2, md: 3}} columns={12}>
        {courses.map((it, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Link href={`/courses/${it.id}`}>
              <Box sx={{
                'width': '100%',
                'border': '1px solid #d2d3d7',
                'padding': '20px',
                'boxSizing': 'border-box',
                'text-decoration': 'none',
                '&:hover': {
                  border: '1px solid #00B0FF',
                },
              }}
              >
                <Box sx={{display: 'flex'}}>
                  <Box sx={{flex: '1 1 auto'}}/>
                  <School sx={{mr: 1}} color={'primary'}/>
                  {it.counter}
                </Box>
                <Box>
                  <Image alt={''} src={''} width={360} height={'240'}></Image>
                </Box>
                <Box sx={{fontSize: 'clamp(1.125rem, 1.09rem + 0.18vw, 1.25rem)'}}>{it.title}</Box>
                <Box sx={{fontSize: 'clamp(0.75rem, 0.71rem + 0.18vw, 0.875rem);'}}> {it.description}</Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default CoursesIndex;
