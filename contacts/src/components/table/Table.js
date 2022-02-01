import React from 'react';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { CustomFooterStatusComponent } from './customFooterTable';
import { Box, Typography } from '@mui/material';

import { GlobalContext } from '../../contexts/GlobalStorage';


const columns = [
  { field: 'First_Name', headerName: 'First name', width: 130 },
  { field: 'Last_Name', headerName: 'Last name', width: 130 },
  { field: 'Email', headerName: 'Email' , width: 230 },
  {
    field: 'Phone',
    headerName: 'Phone',
    width: 100,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 130,
    valueGetter: (params) =>
      `${params.row.First_Name|| ''} ${
        params.row.Last_Name || ''
      }`,
  },
  { field: 'Department', headerName: 'Department', width: 130 },
  { field: 'Mailing_Street', headerName: 'Mailing Street', width: 130 },
  { field: 'Mailing_City', headerName: 'Mailing City', width: 130 },
  { field: 'Mailing_State', headerName: 'Mailing State', width: 130 },
  { field: 'Mailing_Zip', headerName: 'Mailing Zip', width: 130 },
  { field: 'Mailing_Country', headerName: 'Mailing Country', width: 130 },
  { field: 'Owner', headerName: 'Owner', width: 130,
    valueGetter: (params) =>
        `${params.row.Owner.name}`, },
  { field: 'id', headerName: 'ID', width: 130, },
];




export default function DataTable() {
  const [selectionModel, setSelectionModel] = React.useState([]);

  const global = React.useContext(GlobalContext);

  React.useEffect(()=>{
      global.getCont();
  },[])
  

  return (
    <Box style={{ height: '100%', width: '100%',padding:'30px' }}>
        <Typography color={'terciary'}   variant="h7" component="p">
            You have {global.contacts.length} registered contacts
        </Typography>
        <DataGrid
        rows={global.contacts}
        columns={columns}
        pageSize={10}
        loading={global.loading}
        rowsPerPageOptions={[10]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        components={{
          Footer: CustomFooterStatusComponent,
          Toolbar: GridToolbar,
        }}
        componentsProps={{
          footer: { selectionModel },
        }}
      />
    </Box>
  );
}