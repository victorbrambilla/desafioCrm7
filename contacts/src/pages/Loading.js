import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircularProgress, CssBaseline, Grid } from '@mui/material';
import Cookies from 'js-cookie';


export default function Loading() {
    const [token, setToken] = React.useState('')
    const location = useLocation();
    const navigate = useNavigate();


    React.useEffect(()=>{
        setTimeout(()=>{
            if(Cookies.get('token')){
               navigate('/');
            } else {
                var oneHour = new Date(new Date().getTime() + 1 * 3600 * 1000);
                setToken(location.hash.split('=')[1].split('&')[0]);
                Cookies.set("token", token, {
                    expires: oneHour
                });
                if(Cookies.get("token")){
                    navigate('/');
                    window.location.reload();
               }
            }
        },1000)
    },[location.hash, navigate, token])
    

  return (
        <Grid container component='main' 
        sx={{
        height:"100vh", 
        width:'100%',
        display:'flex', 
        alignItems:'center', 
        justifyContent:'center', 
        flexDirection:'column'}}>
        <CssBaseline />

        <CircularProgress color='primary' />
        
        </Grid>
  )
   
}
