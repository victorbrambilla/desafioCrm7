import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Header from '../components/Header';
import ModalPage from '../components/Modal';
import DataTable from '../components/table/Table';

export default function Dashboard() {
  const style = {
    height: '80vh',
    '@media(max-width: 500px)': {
      height: '73vh',
    },
  };

  return (
    <>
      <Header />
      <Box sx={style}>
        <DataTable />
      </Box>
      <ModalPage />
      <AppBar
        sx={{
          backgroundColor: 'white',
          height: '10px',
          bottom: 0,
          position: 'aboslute',
          zIndex: '99',
          top: 'auto',
        }}
      ></AppBar>
    </>
  );
}
