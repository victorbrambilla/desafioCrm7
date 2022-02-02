import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function Header() {
  const navigate = useNavigate();

  const handleChange = () => {
    Cookies.remove('token');
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            color="inherit"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          >
            MyContacts
          </Typography>

          <Button onClick={handleChange} color={'inherit'}>
            <LogoutIcon color="primary"></LogoutIcon>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
