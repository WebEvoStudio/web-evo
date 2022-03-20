import React, {useState} from 'react';
import {NextPage} from 'next';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Tab, Typography} from '@mui/material';
import {Images} from '../../core/libs/images';
import styles from '/styles/docs.module.scss';
import {SnackbarProvider, useSnackbar} from 'notistack';
import {TabContext, TabList, TabPanel} from '@material-ui/lab';

interface Framework {
  name: string;
  description: string;
  image: string;
  website?: string;
}

const DocsIndex: NextPage = () => {
  const {enqueueSnackbar} = useSnackbar();
  const frameworks: Framework[] = [
    {
      image: Images.undrawReact.default.src,
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
    },
    {
      image: Images.undrawNextJs.default.src,
      name: 'Next.js',
      description: 'Next.js is a framework for server-rendered React applications.',
    },
    {
      image: Images.undrawNuxtJs.default.src,
      name: 'Nuxt.js',
      description: 'Nuxt.js is a framework for server-rendered Vue applications.',
    },
  ];
  const openFrameworkWebsite = (framework: Framework) => {
    if (framework.website) {
      window.open(framework.website);
    } else {
      enqueueSnackbar(`No website for ${framework.name}`, {variant: 'info'});
    }
  };
  const [value, setValue] = useState('1');
  return (
    <div className={styles['docs']}>
      <h1 className={styles['docs-title']}>文档</h1>
      <Divider/>
      <Box>
        <TabContext value={value}>
          <Box sx={{padding: '0 20px', borderBottom: 1, borderColor: 'divider'}}>
            <TabList onChange={({newValue}: any) => setValue(newValue)} aria-label="lab API tabs example">
              <Tab label="Frameworks" value="1" />
            </TabList>
          </Box>
          <TabPanel value={'1'}>
            <div className={styles['framework-list']}>
              {frameworks.map((framework, index) => (
                <Card key={index} sx={{width: ['100%', 'calc((100% - 48px) / 3)'], margin: '12px 0'}}>
                  <CardMedia component={'img'} image={framework.image}/>
                  <CardContent>
                    <Typography variant={'h6'} component={'div'}>{framework.name}</Typography>
                    <Typography variant={'body2'} color="text.secondary">{framework.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size={'small'} onClick={() => openFrameworkWebsite(framework)}>查看官网</Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
const IntegrationNotice = () => (
  <SnackbarProvider dense={true} maxSnack={1}>
    <DocsIndex />
  </SnackbarProvider>
);
export default IntegrationNotice;
