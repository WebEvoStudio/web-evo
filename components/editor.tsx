import React from 'react';
import {useState} from 'react';
import {Editor} from '@bytemd/react';
import 'bytemd/dist/index.min.css';
import zhHans from 'bytemd/lib/locales/zh_Hans.json';
import styles from '../styles/editor.module.scss';
import frontmatter from '@bytemd/plugin-frontmatter';
import gfm from '@bytemd/plugin-gfm';
import {Button, Input} from 'antd';
import clipboard from 'clipboardy';
import axios from 'axios';
import 'github-markdown-css/github-markdown-light.css';
import {BytemdPlugin} from 'bytemd';
import {Image} from 'mdast';
import Request from '../core/unit/request';
import ObjectUnit from '../core/unit/object-unit';
import {SnackbarProvider, useSnackbar} from 'notistack';

/**
 * editor.tsx
 * @param {any} props
 * @return {React.ReactElement}
 */
const EditorPage = (props: {title?: string, value?: string, id?: string}) => {
  const [value, setValue] = useState(props.value||'');
  const [title, setTitle] = useState(props.title||'');
  const plugins: BytemdPlugin[] = [frontmatter(), gfm()];
  const isModify = !!props.id;
  const {enqueueSnackbar} = useSnackbar();
  const copy = () => {
    clipboard.write(
        JSON.stringify({title, mark_content: value}),
    ).then(() => enqueueSnackbar('内容已复制到剪贴板', {variant: 'success'}));
  };
  const save = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`;
    const requestData = {title, mark_content: value};
    axios.post(url, requestData)
        .then((res) => enqueueSnackbar('文章发布成功', {variant: 'success'}))
        .catch((err) => enqueueSnackbar(err.message, {variant: 'error'}));
  };
  const modify = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`;
    const requestData = {_id: props.id, title, mark_content: value};
    axios.put(url, requestData)
        .then((res) => enqueueSnackbar('文章修改成功', {variant: 'success'}))
        .catch((err) => enqueueSnackbar(err.message, {variant: 'error'}));
  };
  const uploadImages = async (files: File[]): Promise<Pick<Image, 'url' | 'alt' | 'title'>[]> => {
    const response: Pick<Image, 'url' | 'alt' | 'title'>[] = [];
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
      <div className={styles['actions']}>
        <Input placeholder={'请输入标题'} defaultValue={title} onChange={({target: {value}}) => setTitle(value)}/>
        <Button onClick={copy}>复制到剪贴板</Button>
        <Button onClick={isModify ? modify : save}>{isModify ? '保存修改' : '发布'}</Button>
      </div>
      <Editor
        value={value}
        locale={zhHans} plugins={plugins} onChange={(v: string) => setValue(v)} uploadImages={uploadImages}/>
    </div>
  );
};
const IntegrationNotice = (props: {title?: string, value?: string, id?: string}) => (
  <SnackbarProvider dense={true} maxSnack={1} autoHideDuration={3000}>
    <EditorPage {...props}/>
  </SnackbarProvider>
);
export default IntegrationNotice;
