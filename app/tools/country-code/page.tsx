import React from 'react';
import {
  Card, CardContent,
  CardHeader,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow, Typography,
} from '@mui/material';
import countryCode from '../../../assets/jsons/country-code.json';
import {GridColDef} from '@mui/x-data-grid';
import {Metadata} from 'next';
import {commonMetadata} from '../../../core/config/main.config';

export const metadata: Metadata = {
  ...commonMetadata,
  title: `${commonMetadata.title} - 国家代码`,
};

const CountryCodePage = () => {
  const columns: GridColDef[] = [
    // {field: 'no', headerName: 'No'},
    {field: 'SN', headerName: 'SN', width: 20},
    // {field: 'icon', headerName: 'icon'},
    {field: '中文简称', headerName: '中文简称', width: 120},
    {field: '英文简称', headerName: '英文简称', width: 170},
    {field: 'ISO 2', headerName: 'ISO 2', width: 60},
    {field: 'ISO 3', headerName: 'ISO 3', width: 60},
    {field: '数字代码', headerName: '数字代码', width: 100},
    {field: '电话区号', headerName: '电话区号', width: 100},
    {field: '域名后缀', headerName: '域名后缀', width: 100},
    {field: '备注', headerName: '备注', width: 200},
  ];
  return (
    <Container maxWidth={'lg'}>
      <Card sx={{my: 2}}>
        <CardHeader title={'国家代码简介'}></CardHeader>
        <CardContent>
          <Typography>1、国家代码是一组用来代表国家和境外领土的地理代码;</Typography>
          <Typography>2、国家代码是由字母或数字组成的短字串,方便用于数据处理和通讯;</Typography>
          <Typography>3、ISO 3166-1提供了国家地区代码的三种表现方式,具体包括:
              * 两字母代码(ISO 3166-1 alpha-2):由两字符拉丁字母组成的代码。这种代码拥有多种用途,其中最重要的一个用途与互联网的地理级别域名有关;
              * 三字母代码(ISO 3166-1 alpha-3):由三字符拉丁字母组成的代码;
              * 数字代码(ISO 3166-1 numeric):由三位阿拉伯数字组成的代码;</Typography>
          <Typography>4、表格中 SN 列仅用于本页面项目的索引,无其它意义;</Typography>
          <Typography>5、电脑端: Ctrl+D(收藏本网页), Ctrl+S(保存本网页到电脑), Ctrl+F(在本网页查找字符);</Typography>
          <Typography>6、以下内容按照英文简称的字母顺序排序;</Typography>
        </CardContent>
      </Card>
      <div id="container-b41bbc39088c2494479ef58349cb1ee6"></div>
      <TableContainer component={Paper} sx={{my: 2}}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map(({headerName}) => (
                <TableCell key={headerName} sx={{whiteSpace: 'nowrap'}}>{headerName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {countryCode.map((it: any) => (
              <TableRow key={it.SN}>{columns.map(({field}) => (
                <TableCell key={field}>{it[field]}</TableCell>
              ))}</TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default CountryCodePage;
