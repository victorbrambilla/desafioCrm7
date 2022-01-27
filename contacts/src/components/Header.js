import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import ContactPageSharpIcon from '@mui/icons-material/ContactPageSharp';
import { useNavigate  } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    
    const handleChange = () => {
      localStorage.removeItem('token')
      navigate('/')
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <Typography color={'primary'} variant="h5" component="div" sx={{ flexGrow: 1, display:'flex', alignItems:'center' }}>
                    MyContacts
                    <ContactPageSharpIcon color='secondary' fontSize='large'/>
                </Typography>
                
                <Button onClick={handleChange}  >
                    <LogoutIcon color='secondary'></LogoutIcon>
                    Logout
                </Button>
                
            </Toolbar>
            </AppBar>
        </Box>
    )
}
