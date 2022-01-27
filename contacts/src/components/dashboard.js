import { Container, CssBaseline, Divider, Grid } from '@mui/material'

import React from 'react'
import Header from './Header'
import TablePage from './table'
import SubHeader from './SubHeader'

export default function Dashboard() {

    return (
        <>
        <Header />
        <SubHeader/>
        <Divider light />
        <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline/>
                <Container maxWidth='lg' sx={{mt:10}}>
                     <TablePage />
                </Container>
        </Grid>
        
        </>
     )
}
