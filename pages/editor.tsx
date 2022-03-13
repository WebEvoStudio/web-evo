import {useState} from "react";
import {Editor} from "@bytemd/react";
import 'bytemd/dist/index.min.css'
import zh_Hans from 'bytemd/lib/locales/zh_Hans.json'
import styles from '../styles/editor.module.scss';
import frontmatter from '@bytemd/plugin-frontmatter';
import gfm from "@bytemd/plugin-gfm";
import {Button, message} from "antd";
import clipboard from "clipboardy";
import axios from "axios";
export default function EditorPage() {
  const [value, setValue] = useState('')
  const plugins = [frontmatter(), gfm()];
  const copy = () => {
    clipboard.write(
        JSON.stringify({title: '', mark_content: value})
    ).then(() => message.success('内容已复制到剪贴板'));
  };
  const save = () => {
    console.log({title: '', mark_content: value})
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`;
    const requestData = {title: '', mark_content: value};
    axios.post(url, requestData)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => message.error(err.message))
  };
  return (
    <div>
      {/*<h1>Editor</h1>*/}
      <div className={styles['actions']}>
        <Button onClick={copy}>复制到剪贴板</Button>
        <Button onClick={save}>保存</Button>
      </div>
      <Editor value={value} locale={zh_Hans} plugins={plugins} onChange={(v: string) => setValue(v)}/>
    </div>
  );
}
