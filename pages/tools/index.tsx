import React, {useState} from 'react';
import {NextPage} from 'next';
import {
  Box, Button, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Slider,
  Toolbar, Typography,
} from '@mui/material';
import Uploader from '../../components/uploader';
import FileUnit from '../../core/unit/file-unit';
import Request from '../../core/unit/request';
import JSZip from 'jszip';
import moment from 'moment';
import {SnackbarProvider, useSnackbar} from 'notistack';
import CommonHead from '../../components/common-head';
import ToolLayout from '../../layouts/tool.layout';
import {Download} from '@mui/icons-material';
import ObjectUnit from '../../core/unit/object-unit';
import StringUnit from '../../core/unit/string-unit';

interface Menu {
  title: string;
  icon: React.ReactElement;
  href: string;
  open?: boolean;
  children?: Menu[];
}

const ToolsIndex: NextPage = () => {
  const description = '对低质图片进行去雾,无损放大,对比度增强等多种处理,优化重建高清图像.可用于提升相册图像质量,提升视频监控质量等.';
  const {enqueueSnackbar} = useSnackbar();
  const [selectedImages, setSelectedImages] = useState<{file: File, path: string}[]>([]);
  const [enhancedImages, setEnhancedImages] = useState<string[]>([]);
  const upload = async (files: File[]) => {
    const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
    const request = new Request(host);
    const ossData = await request.get('/ali/oss/policy', {});
    const headers = {'Content-Type': 'multipart/form-data'};
    let {dir} = ossData;
    dir = 'enhance-result';
    const requestBody = ObjectUnit.toFormData({
      key: dir.length ? `${dir}/${files[0].name}` : files[0].name,
      ...ossData,
      file: files[0],
    });
    await request.post(ossData.host, requestBody, headers);
  };
  const [cols, setCols] = useState(3);
  const [running, setRunning] = useState(false);
  const run = async () => {
    setRunning(true);
    try {
      if (!selectedImages.length) return enqueueSnackbar('请选择图片', {variant: 'error'});
      const base64Images = (await Promise.all(selectedImages.map(({file}) => FileUnit.toBase64(file)))) as string[];
      const base64ImageContents = base64Images.map((base64Image) => base64Image.split(',')[1]);
      const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
      const url = '/images/enhance';
      const requests = base64ImageContents.map((item) => new Request(host).post(url, {ImageBase64: item}));
      const responses = await Promise.all(requests);
      const base64ImageHead = base64Images.map((base64Image) => base64Image.split(',')[0]);
      setEnhancedImages(responses.map(({EnhancedImage}, index) => `${base64ImageHead[index]},${EnhancedImage}`));
      enqueueSnackbar('图像处理完成', {variant: 'success'});
      const files = base64Images.map((item, index) => StringUnit.toFile(item, selectedImages[index].file.name));
      console.log(files);
      await upload(files);
    } catch (error: any) {
      enqueueSnackbar(error.message, {variant: 'error'});
    }
    setRunning(false);
  };
  const download = () => {
    const zip = new JSZip();
    const fileNames = selectedImages.map(({file}) => file.name);
    const enhancedImageContents = enhancedImages.map((enhancedImage) => enhancedImage.split(',')[1]);
    enhancedImageContents.forEach((enhancedImageContent, index) => {
      zip.file(fileNames[index], enhancedImageContent, {base64: true});
    });
    zip.generateAsync({type: 'blob'}).then((blob) => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `图像清晰度增强包 ${moment().format('YYYYMMDDHHmmss')}.zip`;
      a.click();
      enqueueSnackbar('下载完成, 请到下载管理器查看', {variant: 'success'});
    }).catch((err) => {
      console.log(err);
    });
  };
  return (
    <ToolLayout onRun={run} running={running} runText={'开始增强图片'}>
      <CommonHead title={'工具 - Web开发人员中心'} description={description}/>
      <Box sx={{flex: 1, background: '#eee', height: '100%', display: 'flex', flexDirection: 'column'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Box sx={{width: 200, display: {xs: 'none', sm: 'flex'}, alignItems: 'center'}}>
            <Typography sx={{whiteSpace: 'nowrap'}}>列:</Typography>
            <Slider
              defaultValue={3}
              step={1}
              min={1}
              max={8}
              getAriaLabel={(value) => `${value}`}
              marks
              sx={{marginLeft: '12px'}}
              onChangeCommitted={(e, value) => setCols(Number(value))}/>
          </Box>
          <Box sx={{flex: 1}}/>
          <Uploader onChange={(e) => setSelectedImages(e)}/>
          <Button
            sx={{color: '#fff', marginLeft: '10px'}}
            variant="contained"
            startIcon={<Download/>}
            onClick={download} disabled={!enhancedImages.length}>一键下载</Button>
        </Toolbar>
        <Box sx={{display: 'flex', width: '100%', height: 'calc(100% - 64px)'}}>
          <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', height: '100%'}}>
            <ListSubheader component="div">源文件</ListSubheader>
            <Box sx={{flex: 1, overflowY: 'scroll'}}>
              <ImageList variant={'masonry'} cols={cols}>
                {selectedImages.map((image, index) => (
                  <ImageListItem key={index}>
                    <Box sx={{position: 'relative'}}>
                      {/* <Image src={image.path} layout={'fill'} objectFit={'none'}/>*/}
                      <img
                        src={`${image.path}`}
                        style={{width: '100%'}}
                        loading="lazy"
                      />
                    </Box>
                    <ImageListItemBar subtitle={image.file.name} title={(image.file.size/1024).toFixed() + 'kb'}/>
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
          <Box sx={{flex: 1, display: 'flex'}} className={'flex-column'}>
            <ListSubheader component="div">增强后</ListSubheader>
            <Box sx={{overflowY: 'scroll', flex: 1}}>
              <ImageList variant={'masonry'} cols={cols}>
                {enhancedImages.map((image, index) => (
                  <ImageListItem key={index}>
                    <Box sx={{position: 'relative'}}>
                      {/* <Image src={image.path} layout={'fill'} objectFit={'none'}/>*/}
                      <img
                        src={`${image}`}
                        style={{width: '100%'}}
                        loading="lazy"
                      />
                    </Box>
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
        </Box>
      </Box>
    </ToolLayout>
  );
};
const IntegrationNotice = () => (
  <SnackbarProvider dense={true} maxSnack={1}>
    <ToolsIndex/>
  </SnackbarProvider>
);
export default IntegrationNotice;
