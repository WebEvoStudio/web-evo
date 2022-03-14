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

/**
 * editor.tsx
 * @constructor
 */
export default function EditorPage() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const plugins = [frontmatter(), gfm()];
  const copy = () => {
    clipboard.write(
        JSON.stringify({title: '', mark_content: value}),
    ).then(() => message.success('内容已复制到剪贴板'));
  };
  const save = () => {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`;
    const requestData = {title, mark_content: value};
    console.log(requestData);
    axios.post(url, requestData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => message.error(err.message));
  };
  return (
    <div>
      {/* <h1>Editor</h1>*/}
      <div className={styles['actions']}>
        <Input placeholder={'请输入标题'} defaultValue={title} onChange={({target: {value}}) => setTitle(value)}/>
        <Button onClick={copy}>复制到剪贴板</Button>
        <Button onClick={save}>保存</Button>
      </div>
      <Editor value={value} locale={zhHans} plugins={plugins} onChange={(v: string) => setValue(v)}/>
    </div>
  );
}
