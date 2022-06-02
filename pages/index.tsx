import React, {useEffect, useState} from 'react';
import styles from '../styles/hello.module.scss';
import CommonHead from '../components/common-head';
import Image from 'next/image';
import {Images} from '../core/libs/images';
import {useRouter} from 'next/router';
import {LoadingButton} from '@mui/lab';
import {Box, Container, Divider, Grid, Typography} from '@mui/material';


/**
 * @class Index
 * @extends React.Component
 */
export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.prefetch('/blogs').then();
  }, []);
  const toBlog = async () => {
    setLoading(true);
    await router.push('/blogs');
    setLoading(false);
  };
  /**
   * render the component
   * @return {JSX.Element}
   */
  return (
    <Container maxWidth={'lg'}>
      <CommonHead/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{order: 1}}>
          <h1 className={styles['h1']}>欢迎来到Web开发人员中心</h1>

          <Box className={styles['image']} sx={{display: {xs: 'block', md: 'none'}}}>
            <Image src={Images.undrawProudCoder} alt={'骄傲的编码员'}/>
          </Box>
          <Typography variant={'body1'}>
            我们是一个帮助web开发人员的团队，我们希望通过这个平台，让更多的人学习web技术，从而提高自己的工作效率。同时，我们也希望通过这个平台，为我们提供一个展示自己的舞台，让更多的人看到我们的实力。
          </Typography>
          <Box sx={{mt: 4}}>
            <div onClick={toBlog}>
              <LoadingButton
                sx={{color: '#fff'}}
                loading={loading}
                loadingIndicator={'Loading...'} color={'primary'} variant="contained">查看我们的工作1</LoadingButton>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: 2}}>
          <Box className={styles['image']} sx={{display: {xs: 'none', md: 'block'}}}>
            <Image src={Images.undrawProudCoder} alt={'骄傲的编码员'}/>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{order: 3}}>
          <Divider/>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 4, md: 5}}}>
          <div className={styles['h1']}>我们是一个对网络开发充满热情的开发人员团队</div>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 5, md: 4}}}>
          <div className={styles['image']}>
            <Image src={Images.undrawTeamCollaboration} alt={'团队协作'}/>
          </div>
        </Grid>
        <Grid item xs={12} sx={{order: 6}}>
          <Divider/>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: 7}}>
          <div className={styles['h1']}>我们在这里帮助您构建您的Web项目</div>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: 8}}>
          <div className={styles['image']}>
            <Image src={Images.undrawUnderConstruction} alt={'🚧正在施工🚧'}/>
          </div>
        </Grid>
        <Grid item xs={12} sx={{order: 9}}>
          <Divider/>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 10, md: 11}}}>
          <div className={styles['h1']}>我们提供丰富的技术文章支持，您可以在这里获得更多的帮助</div>
        </Grid>
        <Grid item xs={12} md={6} sx={{order: {xs: 11, md: 10}}}>
          <div className={styles['image']}>
            <Image src={Images.undrawBlogPost} alt={'博客文章'}/>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
