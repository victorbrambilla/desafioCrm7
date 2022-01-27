import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
 
import gs from '../assets/login.gif'
import logo from '../assets/zohoLogo.png'

export default function Login() {
    return (
        
         <Grid container  component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid item  sm={6} md={7} sx={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
                width:'100%'
                 }}>
            <img src={gs} alt='login' style={{maxWidth:'100%'}} />
          </Grid> 
           
          <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square sx={{
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                padding:'0 20px'
              }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>                
                <Button
                  href='https://accounts.zoho.com/oauth/v2/auth?client_id=1000.O3LDCQ76EIZ2WCN7ME44YFI5FWP0RF&response_type=token&scope=ZohoCRM.modules.ALL&redirect_uri=http://localhost:3000/loading'
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  <Typography color='white' component='h3' variant="h7" >Sign In with Zoho Account </Typography>
                  <img style={{width:'60px', height:'auto'}} alt='zohologo' src={logo}></img>
                </Button>
                <Grid container>
                </Grid>
            </Box>
          </Grid>
        </Grid>
      
    )
}
