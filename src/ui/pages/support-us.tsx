'use client';
import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import Section from '../components/section';
import Image from 'next/image';
import {aliRedEnvelope} from '@/core/libs/images';
import {HelpOutline} from '@mui/icons-material';
import copy from 'copy-to-clipboard';
import {analytics} from '@/core/unit/firebase';
import {logEvent} from 'firebase/analytics';
import {useSnackbar} from 'notistack';

const SupportUs = ({ip}: {ip: string}) => {
  const {enqueueSnackbar} = useSnackbar();
  const [helpShow, setHelpShow] = useState(false);

  const copyPasswordRedEnvelope = () => {
    const password = 836990272;
    copy(String(password));
    enqueueSnackbar(`您的红包口令已复制，打开支付宝搜索口令${password}，领取红包🧧同时支持我们。`, {variant: 'success'});
    analytics.then((res) => res && logEvent(res, 'support_by_ali'));
  };
  const open = () => {
    window.location.href = 'alipays://';
  };
  useEffect( () => {

  }, []);
  const sections = [
    {
      title: '支持我们',
      desc: [
        '您可以通过几种方式为我们提供支持。',
        '我们努力在从开源获取的价值和回馈的价值之间保持平衡。因此，我们自豪地赞助有前途的技术，贡献我们的知识使工具变得更方便，并构建开放代码解决方案以简化工程师的日常工作。',
        '你的支持将有助于支付项目开销，并为我们的团队提供一些支持。',
        '非常感谢你的支持。',
      ],
      children: (
        <Box>
          {/* <Card sx={{mb: 2}}>*/}
          {/*  <CardHeader title={'随时'}></CardHeader>*/}
          {/*  <CardContent>*/}
          {/*    <Typography>通过点击网页中的广告的</Typography>*/}
          {/*  </CardContent>*/}
          {/* </Card>*/}
          {/* <a href="//ptugnins.net/4/6763428" target="_blank" rel="noreferrer">下载免费游戏</a>*/}
          {/* <iframe src={'//aumtoost.net/4/6761510'}></iframe>*/}
          {/* <Card sx={{my: 2}}>*/}
          {/*  <CardHeader title={'随时'}/>*/}
          {/*  <CardContent>*/}
          {/*    <Box>*/}
          {/*      <a href={'//aumtoost.net/4/6761510'}/>*/}
          {/*    </Box>*/}
          {/*  </CardContent>*/}
          {/* </Card>*/}
          <Card sx={{}}>
            <CardHeader title={'每日'}>
            </CardHeader>
            <CardContent>
              <Box sx={{display: 'flex'}}>
                <Box sx={{flex: 1}}>
                  <Typography sx={{mb: 2}}>支付包红包 / 每 24 小时</Typography>
                  <Typography sx={{mb: 1}} variant={'body2'}>长按保存右侧红包图片打开支付包扫一扫。</Typography>
                  <Typography sx={{mb: 1}} variant={'body2'}>或者点击下方按钮复制打开支付宝搜索。</Typography>
                  <Typography>您获得红包的同时将支持我们，此选项可以无限使用。</Typography>
                </Box>
                <CardMedia sx={{width: 120}}>
                  <Image src={aliRedEnvelope} alt={''} style={{width: '100%', height: 'auto'}}/>
                </CardMedia>
              </Box>
            </CardContent>
            <CardActions>
              <Button variant={'contained'} fullWidth onClick={copyPasswordRedEnvelope}>复制口令</Button>
              <Button variant={'contained'} fullWidth onClick={open}>打开支付宝</Button>
              <IconButton onClick={() => setHelpShow(true)}>
                <HelpOutline></HelpOutline>
              </IconButton>
            </CardActions>
            <Dialog
              open={helpShow}
              onClose={() => setHelpShow(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {'无法直接打开支付宝？'}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Web Scheme（网络协议）是一种用于在Web浏览器中通过URL来启动移动应用程序的机制。
                    某些设备或浏览器及 App 可能会阻止或限制某些URL Scheme的使用，以防止恶意行为和滥用。
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setHelpShow(false)} autoFocus>
                    我知道了
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
        </Box>
      ),
    },
  ];
  return (
    <Container maxWidth={'lg'}>
      {sections.map((it, index) => (
        <Section key={index} first={index === 0} title={it.title} desc={it.desc}>
          {it.children}
        </Section>
      ))}
    </Container>
  );
};
export default SupportUs;
