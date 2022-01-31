import { Box } from '@mui/system'
import React from 'react'
import Header from './Header'
import DataTable from './table/Table'


export default function Dashboard() {
    const style={
      height:'80vh',
      '@media(max-width: 500px)':{
        height:'75vh'
    }
    }

    return (
        <>
        <Header/>
        <Box sx={style}>
          <DataTable />
        </Box>
        </>
     )
}
