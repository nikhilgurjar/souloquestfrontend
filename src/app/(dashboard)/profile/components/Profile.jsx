import Container from "@mui/material/Container";
// @types
import UserProfile from "./UserProfile";
import ProfileCover from "./ProfileCover";
import { auth } from "@/utils/authConfig";


export default async function Profile() {
  
 
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
