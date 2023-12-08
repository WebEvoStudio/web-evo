import React, {useState} from 'react';
import {NextPage} from 'next';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Tab,
  Typography,
} from '@mui/material';
import styles from '/styles/docs.module.scss';
import {SnackbarProvider, useSnackbar} from 'notistack';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {useRouter} from 'next/router';
import {Design, designs, Framework, frameworks} from '../../core/libs/docs';


const DocsIndex: NextPage = () => {
  const {enqueueSnackbar} = useSnackbar();
  const router = useRouter();
  const openFrameworkWebsite = (framework: Framework | Design) => {
    if (framework.website) {
      window.open(framework.website);
    } else {
      enqueueSnackbar(`No website for ${framework.name}`, {variant: 'info'});
    }
  };
  const toDetail = (framework: Framework) => {
    if (framework.website) {
      router.push(`/docs/${framework.id}`).then();
    } else {
      enqueueSnackbar(`No website for ${framework.name}`, {variant: 'info'});
    }
  };
  const [value, setValue] = useState('1');
  return (
    <div className={styles['docs']}>
      <Divider/>
      <Box>
        <TabContext value={value}>
          <Box sx={{padding: '0 20px', borderBottom: 1, borderColor: 'divider', display: 'flex'}}>
            <h1 className={styles['docs-title']}>文档</h1>
            <TabList onChange={(event, newValue) => setValue(newValue)} aria-label="lab API tabs example">
              <Tab label="Frameworks" value="1" />
              <Tab label="Designs" value="2" />
            </TabList>
          </Box>
          <Container maxWidth={'md'} sx={{padding: 0}}>
            <TabPanel value={'1'}>
              <div className={styles['framework-list']}>
                {frameworks.map((framework, index) => (
                  <Card
                    key={index}
                    sx={{width: ['100%', 'calc((100% - 48px) / 3)'], margin: '12px 0'}}
                    onClick={() => toDetail(framework)}
                  >
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
            <TabPanel value={'2'}>
              <div className={styles['framework-list']}>
                {designs.map((design, index) => (
                  <Card key={index} sx={{width: ['100%', 'calc((100% - 48px) / 3)'], margin: '12px 0'}}>
                    <CardMedia component={'img'} image={design.image}/>
                    <CardContent>
                      <Typography variant={'h6'} component={'div'}>{design.name}</Typography>
                      <Typography variant={'body2'} color="text.secondary">{design.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size={'small'} onClick={() => openFrameworkWebsite(design)}>查看官网</Button>
                    </CardActions>
                  </Card>
                ))}
              </div>
            </TabPanel>
          </Container>
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
