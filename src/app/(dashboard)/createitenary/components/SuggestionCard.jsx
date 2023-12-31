import React from 'react'
import { Stack, Typography, Card, Box } from '@mui/material'
import Image from 'next/image';
import {CiCirclePlus} from "@react-icons/ci";


const SuggestionCard = ({recommendation, onAddRecommendation}) => {
  return (
    <Card 
    elevation={0} 
    sx={{
      bgcolor: 'transparent',
      borderStyle: 'dashed',
      border: '1px dashed #dee2e6',
      borderRadius: '8px',
      height: '76px',
      '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
        display: { sm: 'flex' },
        width: 'max-content'
    }}>
      <Box sx={{ flexShrink: { sm: 0 }, position: 'relative', width: 66}}>
      <Image
        alt={'cover image'}
        fill
        src={'https://lh5.googleusercontent.com/p/AF1QipMYZbJVmc5nM3kc6ErCUDV4cQS54cCniIxTy4MY=w427-h240-k-no'}
        sx={{
          height: 1,
          objectFit: 'cover',
          width: { sm: 56 },
        }}
      />
    </Box>
    <Stack spacing={3} 
    sx={{ 
      p: (theme) => theme.spacing(1,2, 1, 1.5), 
      width: '100%' 
      }}
      >
      <Stack
       direction={'row'}
       justifyContent={'space-between'}
     
      >
        <Stack spacing={.2}>
        <Typography variant="subtitle2" sx={{ color: 'rgb(250, 84, 28)', fontWeight: 300, lineHeight: 1.5, padding: 0 }}>
          {recommendation.category}
        </Typography>
        <Typography>
          {recommendation.title}
        </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          sx={{ typography: 'body2', color: 'text.secondary', marginLeft: '40px', marginTop: '10px' }}
        >
          <CiCirclePlus size={26} onClick={onAddRecommendation} id={recommendation.id} cursor={'pointer'} />
        </Stack>
      </Stack>
      </Stack>
    </Card>
  )
}

export default SuggestionCard