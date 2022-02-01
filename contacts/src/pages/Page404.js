import React from 'react'
import error from '../assets/error.gif'
import { Button, CssBaseline, Grid } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
 

export default function Page404() {
  const navigate=useNavigate();

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
              <img src={error} alt='erro' style={{width:'600px', height:'600px'}}/>
               
                <Button  variant="contained" startIcon={<ArrowBack />} onClick={()=>{navigate(-1)}} >
                  back  
                </Button>
              
          </Grid>
     )
}
