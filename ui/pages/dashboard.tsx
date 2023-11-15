'use client';
import React from 'react';
import {Avatar, Box, Button, Card, CardContent, CardHeader, Container, IconButton} from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {red} from '@mui/material/colors';
import {Add, MoreVert} from '@mui/icons-material';
import Link from 'next/link';

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90},
];
const rows = [
  {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
];
export const Dashboard = () => {
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
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </CardContent>
      </Card>
    </Container>
  );
};
