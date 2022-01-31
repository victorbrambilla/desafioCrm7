import { Divider } from '@mui/material'

import React from 'react'
import Header from './Header'
import DataTable from './table/Table'


export default function Dashboard() {

    return (
        <>
        <Header/>
        <div style={{height:'80vh'}}>
          <DataTable />
        </div>
        </>
     )
}
