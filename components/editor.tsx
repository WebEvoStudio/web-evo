import React from 'react';
import {useState} from 'react';
import {Editor} from '@bytemd/react';
import 'bytemd/dist/index.min.css';
import zhHans from 'bytemd/lib/locales/zh_Hans.json';
import styles from '../styles/editor.module.scss';
import frontmatter from '@bytemd/plugin-frontmatter';
import gfm from '@bytemd/plugin-gfm';
import {Button, Input, message} from 'antd';
import clipboard from 'clipboardy';
import axios from 'axios';
import 'github-markdown-css/github-markdown-light.css';
import {BytemdPlugin} from 'bytemd';

/**
 * editor.tsx
 * @param {any} props
 * @return {React.ReactElement}
 */
export default function EditorPage(props: {title?: string, value?: string, id?: string}) {
  const [value, setValue] = useState(props.value||'');
  const [title, setTitle] = useState(props.title||'');
  const plugins: BytemdPlugin[] = [frontmatter(), gfm()];
  const isModify = !!props.id;
  console.log(isModify);
  const copy = () => {
    clipboard.write(
        JSON.stringify({title, mark_content: value}),
    ).then(() => message.success('内容已复制到剪贴板'));
  };
  const save = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`;
    const requestData = {title, mark_content: value};
    console.log(requestData);
    axios.post(url, requestData)
        .then((res) => {
          console.log(res.data);
          message.success('文章发布成功').then();
        })
        .catch((err) => message.error(err.message));
  };
  const modify = () => {
    // message.warn('暂不支持修改').then();
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`;
    const requestData = {_id: props.id, title, mark_content: value};
    axios.put(url, requestData).then((res) => {
      console.log(res.data);
      message.success('文章修改成功').then();
    }).catch((err) => message.error(err.message));
  };
  return (
    <div>
      <div className={styles['actions']}>
        <Input placeholder={'请输入标题'} defaultValue={title} onChange={({target: {value}}) => setTitle(value)}/>
        <Button onClick={copy}>复制到剪贴板</Button>
        <Button onClick={isModify ? modify : save}>{isModify ? '保存修改' : '发布'}</Button>
      </div>
      <Editor value={value} locale={zhHans} plugins={plugins} onChange={(v: string) => setValue(v)}/>
    </div>
  );
}
