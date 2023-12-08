import React from 'react';
import {Box} from '@mui/material';
import {Framework, frameworks} from '../../core/libs/docs';

const DocsDetail = ({detail}: {detail: Framework}) => {
  const iframeStyle = {
    width: '100%',
    border: 'none',
    height: 'calc(100vh - 64px)',
  };
  // const iframe = document.getElementById('iframe');
  // console.log(iframe?.title);
  return (
    <Box>
      <iframe id={'iframe'} style={iframeStyle} src={detail.website}></iframe>
    </Box>
  );
};
DocsDetail.getInitialProps = async (ctx: any) => {
  const {id} = ctx.query;
  const detail = frameworks.find((framework) => framework.id === id);
  return {detail};
};
export default DocsDetail;
