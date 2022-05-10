import React from 'react';
import {Box, Button, Container, Grid, TextField, Typography} from '@mui/material';
import {Images} from '../core/libs/images';
import Image from 'next/image';
import {useSnackbar} from 'notistack';

/**
 * Contact page
 * @return {React.ReactElement}
 */
export default function Contact() {
  const {enqueueSnackbar} = useSnackbar();
  const submit = (e: any) => {
    e.preventDefault();
    enqueueSnackbar('暂未开放', {variant: 'info'});
  };
  return (
    <Container maxWidth={'md'}>
      <Image src={Images.undrawContactUs}/>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <Typography
          variant={'h1'}
          sx={{margin: '20px 0'}} fontSize={{xs: '38px', sm: '68px'}} color={'#00B0FF'}>我们能帮你什么吗？</Typography>
        <Typography variant={'body1'} sx={{marginBottom: '50px'}}>
          填写下表，了解 Web开发人员中心 如何帮助您实现雄心勃勃的软件需求！
        </Typography>
        <Box sx={{margin: '20px 0'}}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant={'h3'} fontSize={{sm: '42px'}} color={'#00B0FF'}>让我们谈谈</Typography>
                <Box sx={{padding: '16px', textAlign: 'center'}}>
                  <Typography variant={'h6'}>联系电子邮件:</Typography>
                  <Typography variant={'body1'}>dongjun1997@outllook.com</Typography>
                </Box>
                <Box sx={{padding: '16px', textAlign: 'center'}}>
                  <Typography variant={'h6'}>联系电话:</Typography>
                  <Typography variant={'body1'}>+86-1869-179-1512</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography
                  variant={'h3'}
                  fontSize={{sm: '42px'}}
                  color={'#00B0FF'}
                  sx={{marginBottom: '10px', textAlign: 'center'}}>我们很乐意听取您的意见！</Typography>
                <Box component={'form'} onSubmit={submit}>
                  <Grid container gap={2}>
                    <Grid item xs={12}>
                      <TextField label={'Your name'} fullWidth disabled/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label={'Your e-mail'} fullWidth disabled/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label={'Your message'} fullWidth multiline rows={4} disabled/>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant={'contained'} type={'submit'} disabled>
                          <Typography variant={'h6'} color={'white'}>Submit</Typography>
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
