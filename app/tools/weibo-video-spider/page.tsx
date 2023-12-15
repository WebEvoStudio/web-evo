'use client';
import React, {useState} from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, TextField} from '@mui/material';

export default function WeiboVideoSpiderPage() {
  const [url, setUrl] = useState('');
  const [video, setVideo] = useState<any>({});
  const getVS = async (src: string) => {
    const url = '/api/video-spider' + `?url=${src}`;
    const newVar = await (await fetch(url)).json();
    setVideo(newVar);
  };
  return (
    <Container maxWidth={'md'}>
      <Card>
        <CardActions>
          <form>
            <TextField size={'small'} onChange={({target: {value}}) => setUrl(value)}></TextField>
            <Button variant={'contained'} onClick={() => getVS(url)}>解析视频</Button>
          </form>
        </CardActions>
      </Card>
      <Card>
        <CardMedia>
          <video width={'100%'} style={{maxHeight: 300}} controls src={video.streamUrl}></video>
        </CardMedia>
        <CardHeader title={video.title}></CardHeader>
        <CardContent>
          {JSON.stringify(video.urls)}
          {video.streamUrl}
        </CardContent>
      </Card>
    </Container>
  );
}
