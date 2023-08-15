import React from 'react';
import {Box} from '@mui/material';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
const DataTable = (props: {
  data?: any[],
  columns?: GridColDef[],
}) => {
  const {columns = [{field: 'id'}], data = []} = props;
  return (
    <Box>
      <DataGrid columns={columns} rows={data}></DataGrid>
    </Box>
  );
};
export default DataTable;
