'use client';
import React, {useMemo, useState} from 'react';
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  Grid, Radio, RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import {Images} from '../../core/libs/images';
import Image from 'next/image';
import {useSnackbar} from 'notistack';
// import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import Request from '../../core/unit/request';
import CommonHead from '../../components/common-head';
import {analytics} from '../../core/unit/firebase';
import {logEvent} from 'firebase/analytics';
import {CheckBox} from '@mui/icons-material';


/**
 * Contact page
 * @return {React.ReactElement}
 */
export default function Contact() {
  const {enqueueSnackbar} = useSnackbar();
  const [form, setForm] = useState({
    name: '',
    contact: '',
    email: '',
    mobilePhone: '',
    message: '',
    companyName: '',
    jobRole: '',
    sizeOfTheCompany: '',
    isContactAllowed: true,
    help: '',
  });
  const [formError, setFormError] = useState({
    name: false,
    // contact: false,
    message: false,
    mobilePhone: false,
  });
  const submit = (e: any) => {
    e.preventDefault();
    console.log(form);
    const requestBody: any = {...form};
    Object.keys(requestBody).forEach((key) => requestBody[key] === '' && delete requestBody[key]);
    new Request(process.env['NEXT_PUBLIC_MIDDLEWARE_URL']).post('/customer', requestBody)
        .then(() => {
          enqueueSnackbar('提交成功', {variant: 'success'});
          analytics.then((res) => res && logEvent(res, 'submit_contact_info'));
          setForm({
            isContactAllowed: true,
            companyName: '',
            jobRole: '',
            sizeOfTheCompany: '',
            name: '',
            contact: '',
            email: '',
            mobilePhone: '',
            message: '',
            help: 'services',
          });
        })
        .catch((err) => enqueueSnackbar(err.message, {variant: 'error'}));
  };
  // const contactBlurHandler = () => {
  //   if (form.email === '' && form.mobilePhone === '') return setFormError({...formError, contact: true});
  //   if (form.contact !== '') {
  //     setFormError({...formError, contact: true});
  //     setForm({...form, email: '', mobilePhone: ''});
  //     return;
  //   }
  //   setFormError({...formError, contact: false});
  // };
  // const contactChangeHandler = ({target: {value}}: any) => {
  //   if (isEmail(value)) return setForm({...form, email: value, contact: ''});
  //   if (isMobilePhone(value, 'zh-CN')) return setForm({...form, mobilePhone: value, contact: ''});
  //   setForm({...form, contact: value});
  // };
  const submitDisabled = useMemo(() => {
    // const isError = formError.name || formError.contact || formError.message;
    const isError = formError.name || formError.message;
    const isInput = Object.values(form).some((v) => v !== '');
    return isError || !isInput;
  }, [form, formError]);
  return (
    <Container maxWidth={'lg'}>
      <CommonHead title={'联系 - WebEvolution'}/>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
        <Box sx={{margin: '20px 0'}}>
          <Image
            alt={'contact us'}
            src={Images.undrawContactUs}
            style={{width: '100%', height: 'auto'}}
          />
        </Box>
        <Typography
          variant={'h1'}
          sx={{margin: '20px 0'}} fontSize={{xs: '38px', sm: '68px'}} color={'#00B0FF'}>我们能帮你什么吗？</Typography>
        <Typography variant={'body1'} sx={{marginBottom: '50px'}}>
          联系我们，了解 WebEvolution 如何帮助您实现雄心勃勃的软件需求！如对我们的任何计划或服务有任何疑问，请随时与我们联系。 我们将在 24 小时内回复您！
        </Typography>
        <Box sx={{margin: '20px 0'}}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography
                  variant={'h3'}
                  fontSize={{sm: '42px'}}
                  color={'#00B0FF'}
                  sx={{marginBottom: '10px', textAlign: 'center'}}>我们很乐意听取您的想法！</Typography>
                <Typography variant={'body1'} sx={{marginBottom: '40px'}}>不确定您需要什么？ 让我们集思广益，我们可以如何提供帮助！</Typography>
                <Box component={'form'} onSubmit={submit}>
                  <Grid container gap={2}>
                    <Grid item xs={12}>
                      <TextField
                        label={'姓名'}
                        fullWidth
                        required error={formError.name}
                        helperText={formError.name ? '姓名是必须的' : ''}
                        onBlur={() => setFormError({...formError, name: form.name === ''})}
                        onChange={({target: {value}}) => setForm({...form, name: value})}/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label={'手机号'} fullWidth required
                        error={formError.mobilePhone}
                        helperText={formError.mobilePhone ? '手机号格式不正确' : ''}
                        onBlur={() => setFormError({
                          ...formError,
                          mobilePhone: form.mobilePhone === '' || !isMobilePhone(form.mobilePhone, 'zh-CN'),
                        })}
                        onChange={
                          ({target: {value}}: any) => setForm({
                            ...form,
                            mobilePhone: value,
                          })
                        }/>
                    </Grid>
                    {/* <Grid item xs={12}>*/}
                    {/*  <TextField label={'邮件'} fullWidth*/}
                    {/*    error={formError.contact}*/}
                    {/*    helperText={formError.contact ? '邮箱格式不正确' : ''}*/}
                    {/*    onBlur={contactBlurHandler}*/}
                    {/*    onChange={contactChangeHandler}/>*/}
                    {/* </Grid>*/}
                    <Grid item xs={12}>
                      <TextField
                        label={'公司名称'}
                        fullWidth
                        onChange={({target: {value}}) => setForm({...form, companyName: value})}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label={'职业角色'}
                        fullWidth
                        onChange={({target: {value}}) => setForm({...form, jobRole: value})}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label={'公司规模'}
                        fullWidth
                        onChange={({target: {value}}) => setForm({...form, sizeOfTheCompany: value})}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label={'您的需求信息'}
                        fullWidth required multiline rows={4}
                        error={formError.message}
                        helperText={formError.message ? '需求信息是必须的' : ''}
                        onBlur={() => setFormError({...formError, message: form.message === ''})}
                        onChange={({target: {value}}) => setForm({...form, message: value})}/>
                    </Grid>
                    <Grid item xs={12}>
                      <FormLabel id="demo-radio-buttons-group-label">我们该怎样帮助你？</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="services"
                        name="radio-buttons-group"
                        onChange={({target: {value}}) => setForm({...form, help: value})}
                      >
                        <FormControlLabel value="services" control={<Radio />} label="服务" />
                        <FormControlLabel value="careers" control={<Radio />} label="职业生涯" />
                        <FormControlLabel value="partnerships&sales" control={<Radio />} label="合作伙伴关系和销售" />
                        <FormControlLabel value="other" control={<Radio />} label="其他" />
                      </RadioGroup>
                    </Grid>
                    <Grid item xs={12}>
                      {/* <FormControlLabel control={<CheckBox color={'primary'}/>} label={'我接受您的隐私政策'}/>*/}
                      <FormControlLabel control={<CheckBox color={'primary'}/>} label={'我同意通过提供的联系方式与我联系'}/>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant={'contained'} sx={{width: '150px'}} type={'submit'} disabled={submitDisabled}>
                          <Typography variant={'h6'} color={'white'}>提交</Typography>
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
            <Grid item sx={{display: {xs: 'none', sm: 'block'}}} sm={2}/>
            <Grid item xs={12} sm={4}>
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography variant={'h3'} fontSize={{sm: '42px'}} color={'#00B0FF'}>让我们谈谈</Typography>
                <Box sx={{padding: '16px', textAlign: 'center', mb: '48px'}}>
                  <Typography variant={'h6'}>联系电子邮件:</Typography>
                  <a href={'mailto:dongjun1997@outllook.com?subject=你好!'}>
                    <Typography variant={'body1'}>dongjun1997@outlook.com</Typography>
                  </a>
                </Box>
                <Box sx={{padding: '16px', textAlign: 'center'}}>
                  <Typography variant={'h6'}>联系电话:</Typography>
                  <a href={'tel:+86 18691791512'}>
                    <Typography variant={'body1'}>+86 186 9179 1512</Typography>
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
