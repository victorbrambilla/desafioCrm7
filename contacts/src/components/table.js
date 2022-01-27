import React from 'react'

import Table  from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, LinearProgress, Typography } from '@mui/material';
import ModalPage from './Modal';
import { dataService } from '../services/dataService'
import { GlobalContext } from '../contexts/GlobalStorage';
import { Box } from '@mui/system';

export default function TablePage() {
    const global = React.useContext(GlobalContext);

    const load = async ()=>{
        global.getCont();
    }

    const deleteContact = (id) =>{
        if(window.confirm('Delete this contact?')){
            dataService.deleteContact(id).then(()=>{
                load();
            });
            
        }
    }
    
    React.useEffect(()=>{
        load();
   },[])
   

    return (
        <TableContainer component={Paper}>
            {global.loading && global.contacts.length > 0 &&
                <Box sx={{ width: '100%' }}>
                    <Typography color={'primary'}>Loading...</Typography>
                     
                <LinearProgress></LinearProgress>
                </Box>
                }

            <Table sx={{ minWidth: 960 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell>Contacts</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Department</TableCell>
                <TableCell align="center">Mailing Street</TableCell>
                <TableCell align="center">Mailing City</TableCell>
                <TableCell align="center">Mailing State</TableCell>
                <TableCell align="center">Mailing Zip</TableCell>
                <TableCell align="center">Mailing Country</TableCell>
                <TableCell align="center">Owner</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {global.contacts.length > 0 &&
                global.contacts.map((row) => (
                    <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {row.First_Name} {row.Last_Name}
                            <ModalPage id={row.id}/>
                            <Button size='small' color='error' onClick={()=>{deleteContact(row.id)}} >
                                Delete
                            </Button>
                        </TableCell>
                        <TableCell align="center">{row.Email}</TableCell>
                        <TableCell align="center">{row.Phone}</TableCell>
                        <TableCell align="center">{row.Department}</TableCell>
                        <TableCell align="center">{row.Mailing_Street}</TableCell>
                        <TableCell align="center">{row.Mailing_City}</TableCell>
                        <TableCell align="center">{row.Mailing_State}</TableCell>
                        <TableCell align="center">{row.Mailing_Zip}</TableCell>
                        <TableCell align="center">{row.Mailing_Country}</TableCell>
                        <TableCell align="center">{row.Owner.name}</TableCell>
                    </TableRow>
                    ))}
                    
            </TableBody>
            </Table>
            
        </TableContainer>
    );
    
}
