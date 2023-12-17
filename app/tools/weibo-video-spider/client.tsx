'use client';
import React, {useState} from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia, IconButton,
  List,
  ListItem, ListItemText,
  TextField,
} from '@mui/material';
import {CopyAll} from '@mui/icons-material';
import clipboard from 'clipboardy';
import {enqueueSnackbar} from 'notistack';

export default function Client() {
  const [url, setUrl] = useState('');
  const [video, setVideo] = useState<{title: string, streamUrl: string, urls: {[key: string]: string}}>();
  const getVS = async (src: string) => {
    const url = '/api/video-spider' + `?url=${src}`;
    const newVar = await (await fetch(url)).json();
    setVideo(newVar);
    console.log(video);
  };
  const copyHandle = (v: string) => {
    clipboard.write(v).then(() => enqueueSnackbar('内容已复制到剪贴板', {variant: 'success'}));
  };
  const copy = (v: string) => (
    <IconButton edge="end" aria-label="delete" onClick={() => copyHandle(v)}>
      <CopyAll/>
    </IconButton>
  );
  return (
    <Box>
      <Card sx={{my: 2}}>
        <CardActions>
          <form style={{display: 'flex', width: '100%'}}>
            <TextField sx={{flex: 1, mr: 2}} size={'small'} onChange={({target: {value}}) => setUrl(value)}></TextField>
            <Button variant={'contained'} onClick={() => getVS(url)}>解析视频</Button>
          </form>
        </CardActions>
      </Card>
      <Card sx={{my: 2}}>
        {video && (
          <CardMedia>
            <video width={'100%'} style={{maxHeight: 300}} controls src={video.streamUrl}></video>
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
