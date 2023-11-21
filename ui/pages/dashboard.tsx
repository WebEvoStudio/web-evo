'use client';
import React, {useEffect, useState} from 'react';
import {Avatar, Box, Button, Card, CardContent, CardHeader, IconButton} from '@mui/material';
import {DataGrid, GridActionsCellItem, GridColDef} from '@mui/x-data-grid';
import {red} from '@mui/material/colors';
import {Add, Edit, MoreVert, Preview} from '@mui/icons-material';
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from 'next/navigation';

const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
export const Dashboard = () => {
  const router = useRouter();
  const onEdit = (id: string) => {
    router.push(`/dashboard/blogs/${id}/modify`);
  };
  const columns: GridColDef[] = [
    {field: '_id', headerName: 'ID', width: 220},
    {field: 'title', headerName: 'Title', width: 300},
    {field: 'viewCount', headerName: 'View Count'},
    // {field: 'createTime', headerName: 'Create Time'},
    // {field: 'updateTime', headerName: 'Update Time'},
    {field: 'createdAt', headerName: 'Created At', width: 110},
    {field: 'updatedAt', headerName: 'Updated At', width: 110},
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: (params) => {
        // console.log(params);
        return [
          <GridActionsCellItem
            key={'preview'}
            icon={<Preview/>}
            label={'Preview'}
            onClick={() => router.push(`/blogs/${params.id}`)}
          ></GridActionsCellItem>,
          <GridActionsCellItem key={'edit'} icon={<Edit />} label="Edit" onClick={() => onEdit(String(params.id))}/>,
          // <GridActionsCellItem key={'delete'} icon={<Delete />} label="Delete" />,
        ];
      },
    },
  ];
  const [rows, setRows] = useState([]);
  useEffect( () => {
    axios.get(`${host}dashboard/blogs`).then((res) => {
      console.log(res);
      setRows(res.data.data);
    });
  }, []);
  return (
    <Card sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
      <CardHeader
        action={
          <Box>
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
            <Link href={'/dashboard/publish'}>
              <Button startIcon={ <Add/> } variant={'contained'}>create a new blog</Button>
            </Link>
          </Box>
        }
        avatar={
          <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">D</Avatar>
        }
        title={'Dashboard'}
      >
      </CardHeader>
      <CardContent sx={{flex: 1, overflow: 'hidden'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
            // pinnedColumns: {
            //   right: ['actions']
            // },
          }}
          getRowId={({_id}) => _id}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </CardContent>
    </Card>
  );
};
