import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CircularProgress, CssBaseline, Grid } from '@mui/material';


export default function Loading() {
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(()=>{
        setTimeout(()=>{
            if(location.hash){
                localStorage.setItem('token', location.hash.split('=')[1].split('&')[0])
                if(localStorage.getItem('token')){
                    navigate('/')
                    window.location.reload()
                }
            }else{
                navigate('/')
            }
        },1000)
    },[location.hash, navigate])
    

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
