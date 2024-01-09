'use client';
import Container from "@mui/material/Container";
// @types
import UserProfile from "./UserProfile";
import ProfileCover from "./ProfileCover";


export default function Profile() {
  
 
  return (
    <Container sx={{
      height: '100%'
    }}
    maxWidth={'lg'}
    >
        <ProfileCover />
        <UserProfile />
     
    </Container>
  );
}
