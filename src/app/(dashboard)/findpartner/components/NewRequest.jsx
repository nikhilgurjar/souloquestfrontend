'use client'
import React from 'react'
import { Backdrop, Button, Modal as BaseModal, Stack, Box, Typography } from '@mui/material'
import { styled, css } from '@mui/system';
import Fade from '@mui/material/Fade';
import RequestForm from './RequestForm'

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};

const NewRequest = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
  <Stack sx={{ p: 2.5 }} alignItems={'center'} justifyContent={'center'}>
   <Button variant={'contained'} color='secondary' size={'large'} sx={{ mt: 2, maxWidth: 300 }} onClick={handleOpen}>
    Post a new request instead?
    </Button>
    <Modal
        aria-labelledby="New travel partner request"
        aria-describedby="Request a travel partner"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: StyledBackdrop }}
        keepMounted
      >
        <Fade in={open}>
            <Box sx={{
                bgcolor: '#fff',
                borderRadius: '12px',
                minWidth: 300,
                p: 3
            }}>
        <Stack justifyContent={'center'} alignItems={'center'} sx={{ p: 2.5 }} spacing={2}>
        <Typography variant="h6" sx={{ color: 'inherit' }}>
          Add a short info for your travel partner
               </Typography>
                <RequestForm handleClose={handleClose}/>
                </Stack>
               
        </Box>
        </Fade>
      </Modal>
  </Stack>
  )
}

export default NewRequest