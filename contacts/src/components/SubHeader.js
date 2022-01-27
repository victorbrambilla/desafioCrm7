import React from 'react'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import ModalPage from './Modal';
import { GlobalContext } from '../contexts/GlobalStorage';


export default function SubHeader() {
    const global = React.useContext(GlobalContext);

    return (
        <Box sx={{ flexGrow: 1, display:'flex', justifyContent:'space-between' }}>
            <Box sx={{width:'100%', display:'flex',justifyContent:'space-between', padding:'30px' }}>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography color={'secondary'} gutterBottom  variant="h4" component="span">
                        Register Contacts
                    </Typography>
                    <Typography color={'terciary'}   variant="h7" component="p">
                        You have {global.contacts.length} registered contacts
                    </Typography>
                </Box>
                
                <Box>
                    <ModalPage/>
                </Box>
                
            </Box>
            
        </Box>
        
    )
}
