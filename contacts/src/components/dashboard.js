import { Container, CssBaseline, Divider, Grid } from '@mui/material'

import React from 'react'
import Header from './Header'
import SubHeader from './SubHeader'
import DataTable from './table/table2'


export default function Dashboard() {

    return (
        <>
        <Header />
        <SubHeader/>
        <Divider light />
        <Grid container component="main" sx={{ height: '100vh' }}>
            
                <Container maxWidth='lg' sx={{mt:10}}>
                     <DataTable />
                </Container>
        </Grid>
        
        </>
     )
}
