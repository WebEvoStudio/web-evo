import React from 'react';
import {useState} from 'react';
import {Editor} from '@bytemd/react';
import zhHans from 'bytemd/locales/zh_Hans.json';
import frontmatter from '@bytemd/plugin-frontmatter';
import gfm from '@bytemd/plugin-gfm';
import clipboard from 'clipboardy';
import axios from 'axios';
import Request from '../../core/unit/request';
import ObjectUnit from '../../core/unit/object-unit';
import {useSnackbar} from 'notistack';
import {BytemdEditorContext, BytemdPlugin} from 'bytemd';
import {Box, Button, Card, CardContent, CardHeader, TextField} from '@mui/material';
import {imagePlugin} from '../../core/libs/bytemd-plugins';
import highlight from '@bytemd/plugin-highlight';
import highlightSsr from '@bytemd/plugin-highlight-ssr';
import 'bytemd/dist/index.css';
import 'highlight.js/styles/base16/google-dark.css';
import '../../styles/my-bytemd.css';


const pastePlugin = (): BytemdPlugin => {
  return {
    editorEffect(ctx: BytemdEditorContext): void | (() => void) {
      ctx.editor.getInputField().addEventListener('onpaste', (e) => {
        e.preventDefault();
      });
    },
  };
};

const EditorPage = (props: {title?: string, value?: string, id?: string, pathName?: string}) => {
  const [value, setValue] = useState(props.value||'');
  const [title, setTitle] = useState(props.title||'');
  const [form, setForm] = useState({
    pathName: props['pathName'] || '',
  });
  const plugins: BytemdPlugin[] = [
    frontmatter(),
    gfm(),
    pastePlugin(),
    imagePlugin(),
    highlight(),
    highlightSsr(),
  ];
  const isModify = !!props.id;
  const {enqueueSnackbar} = useSnackbar();
  const copy = () => {
    clipboard.write(
        JSON.stringify({title, mark_content: value}),
    ).then(() => enqueueSnackbar('内容已复制到剪贴板', {variant: 'success'}));
  };
  const save = () => {
    const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
    const path = 'blogs';
    const url = `${host}${path}`;
    const requestData = {title, markContent: value, ...form};
    axios.post(url, requestData)
        .then(() => enqueueSnackbar('文章发布成功', {variant: 'success'}))
        .catch((err) => enqueueSnackbar(err.message, {variant: 'error'}));
  };
  const modify = () => {
    const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
    const path = 'blogs';
    const url = `${host}${path}`;
    // message.warn('暂不支持修改').then();
    const requestData = {_id: props.id, title, markContent: value};
    axios.put(url, requestData)
        .then(() => enqueueSnackbar('文章修改成功', {variant: 'success'}))
        .catch((err) => enqueueSnackbar(err.message, {variant: 'error'}));
  };
  const uploadImages = async (files: File[]): Promise<any[]> => {
    const response: any[] = [];
    try {
      if (files.length > 1) throw new Error('一次只能上传一张图片');
      const fileName = files[0].name;
      if (fileName.indexOf(' ') !== -1) throw new Error('文件名不允许包含空格');
      const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
      const request = new Request(host);
      const ossData = await request.get('/ali/oss/policy', {});
      const headers = {'Content-Type': 'multipart/form-data'};
      const {dir} = ossData;
      const requestBody = ObjectUnit.toFormData({
        key: dir.length ? `${dir}/${files[0].name}` : files[0].name,
        ...ossData,
        file: files[0],
      });
      const {filepath} = await request.post(ossData.host, requestBody, headers);
      response.push({url: filepath, alt: '', title: ''});
      return response;
    } catch (e: any) {
      enqueueSnackbar(e.message, {variant: 'error'});
      throw new DOMException(e.message);
    }
  };
  return (
    <div>
      <div className={''}>
        <Card>
          <CardHeader
            title={
              <Box sx={{flex: 1, display: 'flex'}} mr={2}>
                <TextField
                  label={'标题'}
                  size={'small'}
                  fullWidth
                  value={title}
                  sx={{mr: 2}}
                  onChange={({target: {value}}) => setTitle(value)}
                />
                <TextField
                  label={'路径'}
                  size={'small'}
                  value={form.pathName}
                  onChange={({target: {value}}) => setForm({...form, pathName: value})}
                />
              </Box>
            }
            action={
              <Box sx={{display: 'flex', alignItems: 'center', mt: '6px', mb: '4px'}}>
                <Button variant={'outlined'} sx={{mr: 2}} onClick={copy}>复制到剪贴板</Button>
                <Button variant={'outlined'} onClick={isModify ? modify : save}>{isModify ? '保存修改' : '发布'}</Button>
              </Box>
            }
          />
          <CardContent>
            <Editor
              value={value}
              plugins={plugins}
              locale={zhHans}
              onChange={(v: string) => setValue(v)}
              uploadImages={uploadImages}/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default EditorPage;
