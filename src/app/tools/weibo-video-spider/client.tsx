'use client';
import React, {useState} from 'react';
import {
  Box, Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia, IconButton,
  List,
  ListItem, ListItemText,
  TextField,
} from '@mui/material';
import {CopyAll, Download} from '@mui/icons-material';
import clipboard from 'clipboardy';
import {enqueueSnackbar} from 'notistack';
import {LoadingButton} from '@mui/lab';

export default function Client() {
  const [url, setUrl] = useState('');
  const [video, setVideo] = useState<{title: string, streamUrl: string, urls: {[key: string]: string}}>();
  const [parsing, setParsing] = useState(false);
  const getVS = async (src: string) => {
    try {
      setParsing(true);
      const url = '/api/video-spider' + `?url=${src}`;
      const newVar = await (await fetch(url)).json();
      setVideo(newVar);
      console.log(video);
    } finally {
      setParsing(false);
    }
  };
  const copyHandle = (v: string) => {
    clipboard.write(v).then(() => enqueueSnackbar('内容已复制到剪贴板', {variant: 'success'}));
  };
  const downloadHandle = async (v: string) => {
  };
  const copy = (v: string) => (
    <Box sx={{display: 'flex'}}>
      <IconButton edge="end" aria-label="delete" onClick={() => copyHandle(v)}>
        <CopyAll/>
      </IconButton>
      <IconButton onClick={() => downloadHandle(v)}>
        <Download/>
      </IconButton>
    </Box>
  );
  return (
    <Box>
      <Card sx={{my: 2}}>
        <CardActions>
          <form style={{display: 'flex', width: '100%'}}>
            <TextField sx={{flex: 1, mr: 2}} size={'small'} onChange={({target: {value}}) => setUrl(value)}></TextField>
            <LoadingButton
              variant={'contained'}
              loading={parsing}
              onClick={() => getVS(url)}
              type={'submit'}
            >
              {parsing ? '正在解析' : '解析地址'}
            </LoadingButton>
          </form>
        </CardActions>
      </Card>
      <Card sx={{my: 2}}>
        {video && (
          <CardMedia>
            <video
              width={'100%'}
              style={{maxHeight: 300}}
              controls
              src={video.streamUrl.replace('http:', 'https:')}
            ></video>
          </CardMedia>
        )}
        <CardHeader title={video?.title}></CardHeader>
        <CardContent>
          <List sx={{mx: -2, my: -2}}>
            {video?.urls && Object.keys(video.urls).map(
                (it, idx) => (
                  <ListItem key={idx} secondaryAction={copy('https:' + video.urls[it])}>
                    <ListItemText primary={it} secondary={'https:' + video.urls[it]} />
                  </ListItem>),
            )}
            {video?.urls && (
              <ListItem key={'stream'} secondaryAction={copy(video.streamUrl)}>
                <ListItemText primary={'串流地址'} secondary={video.streamUrl}></ListItemText>
              </ListItem>
            )}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
