import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal  from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import RegisterContact from './RegisterContact';
import { Fade } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



export default function ModalPage(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {props.id ? <Button size='small' onClick={handleOpen} color='primary'>Edit</Button> :  <Button onClick={handleOpen} color='secondary' variant="contained" startIcon={<AddIcon />}>Register</Button>}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" color={'secondary'} variant="h5" component="h1" textAlign={'center'} mb={2} sx={{borderBottom:'1px solid #03C03C'}}>
                            {props.id ? 'Edit Contact' : 'Register Contact' }
                        </Typography>
                        <RegisterContact id={props.id} closeModal={handleClose}/>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}