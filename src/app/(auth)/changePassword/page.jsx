'use client';
import React from 'react';
import { styled } from '@mui/system';
import { Grid, Card, Typography, Stack } from '@mui/material';
import ChangePassword from '../auth/components/auth/ChangePassword';
const RootContainer = styled(Grid)({
    height: '100vh', // Adjust the height as needed
    backgroundImage: 'linear-gradient(to right, #ff4081, #3f51b5)', // Gradient colors
    color: '#fff', // Text color
    padding: (theme) => theme.spacing(2),
});
const StyledCard = styled(Card)({
    display: 'flex',
    height: '100%',
    maxHeight: '280px',
    padding: '40px'
});
const ChangePasswordPage = () => {
    return (<RootContainer container justifyContent="center" alignItems="center">
        <StyledCard>
       <Stack>
            <Typography variant="h5" component="h2" textAlign={'center'} color={'primary.dark'} fontWeight={'bolder'}>
                Change Password
            </Typography>
            <Typography variant="subtitle2" component="h6" sx={{
            color: (theme) => theme.palette.grey[500],
            fontWeight: 'bold',
            textAlign: 'center'
        }}>
                This is very good practice to change your password regularly.
            </Typography>
            <Stack mt={5} mb={2}>
            <ChangePassword />
            </Stack>
            </Stack>
        </StyledCard>
    </RootContainer>);
};
export default ChangePasswordPage;
