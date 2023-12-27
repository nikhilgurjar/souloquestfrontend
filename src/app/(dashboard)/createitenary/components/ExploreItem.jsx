import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ExploreItem = () => {
  return (
   <Card sx={{ 
    maxWidth: '300px', 
    borderRadius: '12px', 
   
   }}>
    <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Delhi Regional cards"
      />
      <CardContent>
        <Typography variant="body1" sx={{ color: 'inherit', fontWeight: 400 }}>
            Wonderful trip to delhi
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: 400 }}>
            Lets visit the wonderful delhi
        </Typography>
      </CardContent>
   </Card>
  )
}

export default ExploreItem