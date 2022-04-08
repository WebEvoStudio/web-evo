import React from 'react';
import {Button} from '@mui/material';
import style from './uploader.module.scss';
interface Props {
  onChange: (files: {file: File, path: string}[]) => void;
}
const Uploader = ({onChange}: Props) => {
  let inputRef: HTMLInputElement | null = null;
  const chooseFile = () => {
    if (inputRef) {
      inputRef.click();
    }
  };
  const inputChange = () => {
    console.log(inputRef?.files);
    if (inputRef?.files) {
      const map = [];
      for (const filesKey in inputRef.files) {
        if (inputRef.files.hasOwnProperty(filesKey)) {
          const file = inputRef.files[filesKey];
          const path = URL.createObjectURL(file);
          map.push({file, path});
        }
      }
      console.log(map);
      onChange(map);
    }
  };
  return (
    <div className={style['uploader']}>
      <Button onClick={chooseFile} variant={'outlined'}>选择文件</Button>
      <input type="file" ref={(ref) => inputRef = ref} multiple onChange={inputChange}/>
    </div>
  );
};
export default Uploader;
