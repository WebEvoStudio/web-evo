import React from 'react';
import {Button} from '@mui/material';
import style from './uploader.module.scss';
const Uploader = () => {
  return (
    <div className={style['uploader']}>
      <Button>选择文件</Button>
      <input type="file" />
    </div>
  );
};
export default Uploader;
