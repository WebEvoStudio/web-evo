'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import {Images, uniAppLogo} from '../../core/libs/images';
import {useRouter} from 'next/navigation';
import {LoadingButton} from '@mui/lab';
import {
  Container,
  Grid,
  ListItem,
  Typography,
  List,
  ListItemText,
  ListItemIcon, Button, Card, CardContent, CardMedia, CardHeader, CardActions, Tabs, Tab, CardActionArea,
} from '@mui/material';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  Diversity1 as Diversity1Icon,
  GitHub as GitHubIcon,
  East as EastIcon,
  South as SouthIcon,
} from '@mui/icons-material';
import Icons from '../../core/libs/icons';
import HomeServices from '../home-services';
import {projects} from '../../data/projects';
import {Project} from '../components/project-card';

/**
 * @class Home
 * @extends React.Component
 */
export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const technologies: any[] = [
    {name: 'vue', image: Images.vueLogo},
    {name: 'uni-app', image: uniAppLogo},
    // {id: 1, name: 'Angular', image: Images.angularLogo},
    // {id: 2, name: 'React.js', image: Images.reactLogo},
    // {id: 4, name: 'Nest.js', image: Images.nestjsLogo},
    // {id: 5, name: 'Nuxt.js', image: Images.nuxtJsLogo},
    // {id: 6, name: 'Next.js', image: Images.nextJsLogo},
  ];
  useEffect(() => {
    router.prefetch('/blogs');
  }, []);
  const toTechnologies = async () => {
    const anchorElement = document.getElementById('technologies');
    if (anchorElement) {
      anchorElement.scrollIntoView(
          {behavior: 'smooth'},
      );
    }
  };
  const toBlog = async () => {
    setLoading(true);
    router.push('/blogs');
    setLoading(false);
  };
  const toAbout = async () => {
    router.push('/about');
  };
  const fontSizes = {
    title: 'clamp(1.5rem, 1.29rem + 1.07vw, 2.25rem)',
    subtitle: 'clamp(1.3rem, 1.09rem + 1.07vw, 2.05rem)',
    content: 'clamp(1rem, 0.96rem + 0.18vw, 1.125rem)',
  };
  const [current, setCurrent] = useState(0);
  const [currentProject, setCurrentProject] = useState<Project>();
  useEffect(() => {
    setTimeout(
        () => setCurrentProject(
            projects
                .filter((it) => it.sortTechnologies?.includes(technologies[current].name))
                .at(0),
        ),
        500,
    );
  }, [current]);
  /**
   * render the component
   * @return {JSX.Element}
   */
  return (
    <Container maxWidth={'lg'}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Card elevation={0} variant={'outlined'} sx={{mt: 2}}>
            <CardHeader subheader={'About Web Evo'}></CardHeader>
            <CardMedia sx={{display: 'flex', justifyContent: 'center'}}>
              <Image style={{maxWidth: 380}} layout={'responsive'} src={Images.undrawProudCoder} alt={'骄傲的编码员'}></Image>
            </CardMedia>
            <CardContent>
              <Typography component={'h1'} fontSize={fontSizes.title}>
                Web Evo - 可信赖的技术合作伙伴
              </Typography>
              <Typography fontSize={fontSizes.content}>
                我们通过加速开发流程，填补您软件项目中的技术空白，帮助您实现更好的结果，并在减少部署时间的同时提供高质量的解决方案。
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size={'large'}
                sx={{width: '100%'}}
                color={'primary'} variant="contained"
                onClick={toAbout}
              >
                <span>了解更多信息</span>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card variant={'outlined'} sx={{pb: 0}}>
            <CardHeader subheader={'技术堆栈'}></CardHeader>
            <CardActions sx={{p: 0}}>
              <Tabs value={current} sx={{pa: 0, p: 0, padding: 0}}>
                {technologies.map((it, key) => (
                  <Tab
                    key={key}
                    label={it.name}
                    value={key}
                    icon={<Image width={36.5} height={36.5} src={it.image} alt={''}></Image>}
                    onClick={() => setCurrent(key)}
                  ></Tab>
                ))}
              </Tabs>
            </CardActions>
            <CardMedia>
              <CardActionArea>
                <Image
                  src={currentProject?.headerImg!}
                  alt={''} layout={'responsive'}
                ></Image>
              </CardActionArea>
            </CardMedia>
            <CardContent>
              <Typography fontSize={fontSizes.subtitle}>{currentProject?.name}</Typography>
              <Typography
                sx={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
                fontSize={fontSizes.content}
              >{currentProject?.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant={'outlined'}>
            <CardHeader subheader={'优先事项一'}></CardHeader>
            <CardMedia>
              <Image
                src={Images.undrawTeamCollaboration}
                alt={'团队协作'}
                layout={'responsive'}
              />
            </CardMedia>
            <CardContent>
              <Typography fontSize={fontSizes.subtitle}>
                培养专业技术成长
              </Typography>
              <List sx={{mx: -2}}>
                <ListItem>
                  <ListItemIcon>
                    <CodeIcon/>
                  </ListItemIcon>
                  <ListItemText>自我发展的文化</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SchoolIcon/>
                  </ListItemIcon>
                  <ListItemText>技能提升时间作为计划的一部分</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Diversity1Icon/>
                  </ListItemIcon>
                  <ListItemText>内部和外部知识共享</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GitHubIcon/>
                  </ListItemIcon>
                  <ListItemText>对开源贡献</ListItemText>
                </ListItem>
              </List>
              <Typography fontSize={fontSizes.content}>
              </Typography>
            </CardContent>
            <CardActions>
              <LoadingButton
                sx={{color: '#fff', width: '100%'}}
                size={'large'}
                loading={loading}
                loadingIndicator={'Loading...'} color={'primary'} variant="contained"
                onClick={toBlog}
              >
                <span>访问博客</span>
                <EastIcon sx={{ml: 1}}/>
              </LoadingButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant={'outlined'}>
            <CardHeader subheader={'优先事项二'}></CardHeader>
            <CardMedia>
              <Image
                src={Images.undrawEngineeringTeam}
                alt={'工程团队'}
                layout={'responsive'}
              />
            </CardMedia>
            <CardContent>
              <Typography fontSize={fontSizes.subtitle}>
                让外包更人性化
              </Typography>
              <List sx={{mx: -2}}>
                <ListItem>
                  <ListItemIcon>
                    <Icons.Comment/>
                  </ListItemIcon>
                  <ListItemText>加强沟通</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Icons.PersonOff/>
                  </ListItemIcon>
                  <ListItemText>减少官僚主义</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Icons.SafetyDivider/>
                  </ListItemIcon>
                  <ListItemText>扁平化公司结构</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Icons.Group/>
                  </ListItemIcon>
                  <ListItemText>我们都是公司内部和客户的合作伙伴</ListItemText>
                </ListItem>
              </List>
              <Typography fontSize={fontSizes.content}>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card variant={'outlined'}>
            <CardHeader subheader={'优先事项三'}></CardHeader>
            <CardMedia>
              <Image
                src={Images.undrawSolutionMindset}
                alt={'解决方案思维'}
                layout={'responsive'}
              />
            </CardMedia>
            <CardContent>
              <Typography fontSize={fontSizes.subtitle}>
                让最复杂的想法栩栩如生
              </Typography>
              <List sx={{mx: -2}}>
                <ListItem>
                  <ListItemIcon>
                    <Icons.TrendingUp/>
                  </ListItemIcon>
                  <ListItemText>将技术推向极限</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Icons.Biotech/>
                  </ListItemIcon>
                  <ListItemText>在公司内部建立独特的专业知识</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Icons.DesktopMac/>
                  </ListItemIcon>
                  <ListItemText>掌握尖端技术</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Icons.PsychologyAlt/>
                  </ListItemIcon>
                  <ListItemText>始终找到满足客户业务需求的方法</ListItemText>
                </ListItem>
              </List>
              <Typography fontSize={fontSizes.content}>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                sx={{color: '#fff', width: '100%'}}
                size={'large'}
                color={'primary'} variant="contained"
                onClick={toTechnologies}
              >
                <span>查看我们的技术堆栈</span>
                <SouthIcon sx={{ml: 1}}/>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card variant={'outlined'}>
            <CardHeader subheader={'服务'}></CardHeader>
            <CardMedia>
              <Image
                src={Images.undrawServices}
                alt={'服务'}
                layout={'responsive'}
              />
            </CardMedia>
            <CardActions>
              <HomeServices isDesc={false} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  );
}
