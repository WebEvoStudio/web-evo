'use client';
import React from 'react';
import {Box, Card, Container, Typography} from '@mui/material';
import Section from '../components/section';
import {
  MdiExport,
  MdiFilePdfOutline,
  MdiFileUploadOutline,
  MdiLanguageMarkdownOutline,
} from '../components/material-design-icons';
import Uploader from '../../components/uploader';
import mdToPdf from 'md-to-pdf';
export const MarkdownToPdf = () => {
  const chooseFile = async (files: {file: File, path: string}[]) => {
    // const fileChooser = new FileChooser({accept: null});
    // const fileRets = await fileChooser.chooseFile();
    console.log(files);
    // const output = await mdToPdf({path: files[0].path});
    // console.log(output);
    const formData = new FormData();
    formData.append('file', files[0].file);
    const response = await fetch('/api/markdown-to-pdf', {method: 'POST', body: formData});
    const result = await response.json();
    console.log(result);
  };
  return (
    <Container maxWidth={'lg'}>
      <Section
        title={'Markdown转PDF'}
        desc={'仅需数秒便可将Markdown(md)文档转换为PDF格式，同时完美呈现Markdown文档的排版和样式'}
      >
        <Card sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Box style={{flex: 1, textAlign: 'end'}}>
            <MdiLanguageMarkdownOutline fontSize={90} color={'green'}/>
          </Box>
          <MdiExport fontSize={30}/>
          <Box style={{flex: 1}}>
            <MdiFilePdfOutline fontSize={50} color={'red'}/>
          </Box>
        </Card>
      </Section>
      <Card
        variant={'outlined'}
        sx={{
          p: 2,
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/*  <MdiFileUploadOutline fontSize={50} color={'#cccccc'}/>*/}
        {/*  <Typography>点击添加文件</Typography>*/}
        <Uploader onChange={chooseFile}/>
      </Card>
    </Container>
  );
};
