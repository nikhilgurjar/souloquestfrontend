'use client'
import { Grid, Stack } from '@mui/material';
import React from 'react'
import ProfileSocialInfo from './ProfileSocialInfo';
import ProfileAbout from './ProfileAbout';

const UserProfile = ({user}) => {

  return (
    <Grid container spacing={3} sx={{mt: 4}}>
      <Grid item xs={12} md={7}>
        <Stack spacing={3}>
          <ProfileAbout
            about={user?.about}
            country={user?.country}
            email={user?.email}
            city={user?.city}
            state={user?.state}
            // company={user.company}
            // education={user.education}
          />
        </Stack>
      </Grid>

      <Grid item xs={12} md={5}>
        {user?.socialMedia && (
          <ProfileSocialInfo socialLinks={user?.socialMedia} />
        )}
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