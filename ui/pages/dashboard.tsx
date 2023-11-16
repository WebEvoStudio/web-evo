'use client';
import React, {useEffect, useState} from 'react';
import {Avatar, Box, Button, Card, CardContent, CardHeader, Container, IconButton} from '@mui/material';
import {DataGrid, GridActionsCellItem, GridColDef} from '@mui/x-data-grid';
import {red} from '@mui/material/colors';
import {Add, Delete, Edit, MoreVert} from '@mui/icons-material';
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from 'next/navigation';

const host = process.env['NEXT_PUBLIC_MIDDLEWARE_URL'];
export const Dashboard = () => {
  const router = useRouter();
  const onEdit = (id: string) => {
    router.push(`/blogs/modify/${id}`);
  };
  const columns: GridColDef[] = [
    {field: '_id', headerName: 'ID', width: 220},
    {field: 'title', headerName: 'Title', width: 300},
    {field: 'viewCount', headerName: 'View Count'},
    {field: 'createTime', headerName: 'Create Time'},
    {field: 'updateTime', headerName: 'Update Time'},
    {field: 'createdAt', headerName: 'Created At'},
    {field: 'updatedAt', headerName: 'Updated At'},
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: (params) => {
        // console.log(params);
        return [
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
    <Container sx={{mb: 2}}>
      <Card>
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
        <CardContent>
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
    </Container>
  );
};
