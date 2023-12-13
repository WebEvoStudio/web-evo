import React from 'react';
import {Metadata} from 'next';
import {commonMetadata} from '../../core/config/main.config';
import SupportUs from '../../ui/pages/support-us';
import {headers} from 'next/headers';


export const metadata: Metadata = {
  ...commonMetadata,
  title: `${commonMetadata.title} - 支持我们`,
};
const SupportUsPage = async () => {
  const headersList = headers();
  const getIp = (): string => {
    const xRealIp = headersList.get('x-real-ip');
    if (xRealIp) return xRealIp;
    const xForwardedFor = headersList.get('x-forwarded-for');
    if (Array.isArray(xForwardedFor)) return xForwardedFor.at(0)!.toString();
    return xForwardedFor?.split(',').at(0) || 'Unknown';
  };
  // const ua = headersList.get('User-Agent');
  // const ref = headersList.get('Referer');
  // const getData = async () => {
  //   const host = 'http://1881.digitaldsp.com';
  //   const path = '/api/bid_request';
  //   const auth = '7d8c896bb460fd27426579eb242b0ce4b48f8161';
  // eslint-disable-next-line max-len
  // const paramStr = `?auth=${auth}&feed=1881&auth=cDDs8yaZlO&ip=${getIp()}&ua=${ua}&lang=fr-CH&ref=${ref}&sid=6761502`;
  //   const url = `${host}${path}${paramStr}`;
  //   return await fetch(url);
  // };
  // const response = await getData();
  return (<SupportUs ip={getIp()}/>);
};
export default SupportUsPage;
