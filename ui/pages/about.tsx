'use client';
import React from 'react';
import {
  Box, Button,
  Card, CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container, Step,
  StepContent,
  StepLabel,
  Stepper, Typography,
} from '@mui/material';
import Section from '../components/section';
import Image from 'next/image';
import {aliRedEnvelope, Images} from '../../core/libs/images';
import copy from 'copy-to-clipboard';

const openAli = () => {
  const text = '复制 836990272 📸扌丁開📸吱怤 b`ao.去搜索，纟工.b.ao`惠券，惠及你我';
  copy(text);
  window.location.href = 'alipays://';
};
const About = () => {
  const sections = [
    {
      title: '关于 Web Evo',
      // eslint-disable-next-line max-len
      desc: 'Web Evo全称Web Evolution (网络进化) 是一个现代网络咨询工作室，致力于帮助公司企业和个人实现数字化转型。我们提供设计、架构、开发、运营、产品指导等服务。我们注重成员之间的相互尊重和相互理解，以及与客户之间的良好沟通。我们致力于为客户提供最好的服务，同时也关注员工的福利和工作环境。',
      children: (
        <Box sx={{width: '100%'}}>
          <Image style={{width: '100%', height: 'auto'}} src={Images.undrawTeamwork} alt='团队工作'></Image>
        </Box>
      ),
    },
    {
      title: '我们的价值观',
      desc: '',
      children: (() => {
        const steps = [
          {label: '质量', content: '我们正在突破我们创建的软件可靠性的极限。'},
          {label: '问责', content: '我们以实际结果和实现的目标来支持我们的绩效。'},
          {label: '透明度', content: '我们鼓励开放、诚实和沟通。'},
          {label: '团队合作', content: '通过帮助他人成功，我们才能取得最大的成功。'},
          {label: '稳定性', content: '我们对自己的行动当家作主，并使进展成为可预测的指标。'},
          {label: '成长', content: '我们通过培训、知识共享和对开源的贡献蓬勃发展。'},
          {label: '友好', content: '我们在 Web Evo 及其他领域营造支持和友好的氛围。'},
        ];
        return (
          <Box>
            <Stepper orientation="vertical">
              {steps.map((it, index) => (
                <Step key={index} expanded completed>
                  <StepLabel>{it.label}</StepLabel>
                  <StepContent>{it.content}</StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        );
      })(),
    },
    {
      title: '团队文化',
      desc: '我们相信，使开发世界变得更加美好，在哪里可以与您的团队交付最佳成绩，并使他们拥有最佳实践，或者使所有人更加了解教育。',
      children: (<></>),
    },
    {
      title: '支持我们',
      desc: [
        '您可以通过几种方式为我们提供支持。',
        '你的支持将有助于支付项目开销，并为我们的团队提供一些支持。',
        '我们努力在从开源获取的价值和回馈的价值之间保持平衡。因此，我们自豪地赞助有前途的技术，贡献我们的知识使工具变得更方便，并构建开放代码解决方案以简化工程师的日常工作。',
        '非常感谢你的支持。',
      ],
      children: (
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
              <CardMedia>
                <Image src={aliRedEnvelope} alt={''} width={120}/>
              </CardMedia>
            </Box>
          </CardContent>
          <CardActions>
            <Button variant={'contained'} fullWidth onClick={openAli}>复制口令并打开支付宝</Button>
            {/* <IconButton>*/}
            {/*  <HelpOutline></HelpOutline>*/}
            {/* </IconButton>*/}
          </CardActions>
        </Card>
      ),
    },
  ];
  return (
    <Container max-width={'lg'}>
      {sections.map((it, index) => (
        <Section key={index} first={index === 0} title={it.title} desc={it.desc}>
          {it.children}
        </Section>
      ))}
    </Container>
  );
};

export default About;
