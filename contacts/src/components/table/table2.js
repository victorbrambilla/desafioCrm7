import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { GlobalContext } from '../../contexts/GlobalStorage';
import { CustomFooterStatusComponent } from './customFooterTable';

const columns = [
  { field: 'First_Name', headerName: 'First name', width: 130 },
  { field: 'Last_Name', headerName: 'Last name', width: 130 },
  { field: 'Email', headerName: 'Email' , width: 230 },
  {
    field: 'Phone',
    headerName: 'Phone',
    type: 'number',
    width: 90,
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
  { field: 'Mailing_State', headerName: 'Mailing State', width: 70 },
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

    const load = () =>{
        global.getCont();
    }

    React.useEffect(()=>{
        load();
   },[])
   

  return (
    <div style={{ height: 400, width: '100%' }}>
        <DataGrid
        
        rows={global.contacts}
        columns={columns}
        pageSize={5}
        loading={global.loading}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        components={{
          Footer: CustomFooterStatusComponent,
        }}
        componentsProps={{
          footer: { selectionModel },
        }}
        
      />
    
    </div>
  );
}