import { Grid, Stack } from '@mui/material';
import React from 'react'
import ProfileAbout from './ProfileAbout';
import SocialInfo from './SocialInfo.client';

const UserProfile = () => {
 

  return (
    <Grid container spacing={3} sx={{mt: 4}}>
      <Grid item xs={12} md={7}>
        <Stack spacing={3}>
          <ProfileAbout />
        </Stack>
      </Grid>

      <Grid item xs={12} md={5}>
        <SocialInfo />
        {/* <Stack spacing={3} marginTop={3}>
            {reviews?.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </Stack> */}
      </Grid>
    </Grid>
  );
}

export default UserProfile