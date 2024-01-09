'use client';
// @mui
import {
    Button,
    TextField,
    Typography,
    InputAdornment,
    Container,
  } from '@mui/material';
  // components
import comingSoonImage from '../../public/assets/illustration_comingsoon.svg';
import Image from './image/Image';

export default function ComingSoonView() {

    return (
      <Container maxWidth='lg' sx={{
        py: 15,
        textAlign: 'center'
      }}>
        <Typography variant="h3" paragraph>
          Coming Soon!
        </Typography>
  
        <Typography sx={{ color: 'text.secondary' }}>
          We are currently working hard on this page!
        </Typography>
  
        <Image
          alt="comingsoon"
          src={comingSoonImage.src}
          sx={{
            my: 3,
            mx: 'auto',
            maxWidth: 320,
          }}
        />
  
        <TextField
          fullWidth
          hiddenLabel
          placeholder="Enter your email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button variant="contained" size="large" color="inherit">
                  Notify
                </Button>
              </InputAdornment>
            ),
            sx: { pr: 0.5 },
          }}
          sx={{ my: 5, maxWidth: '440px', mt: '-20px' }}
        />

      </Container>
    );
  }
