import Container from "@mui/material/Container";
// @types
import UserProfile from "./UserProfile";
import ProfileCover from "./ProfileCover";
import { auth } from "@/utils/authConfig";


export default async function Profile() {
  const session = await auth();
  const profile = session?.user;
  console.log(profile, session)
  return (
    <Container sx={{
      height: '100%'
    }}
    maxWidth={'lg'}
    >
        <ProfileCover user={profile} />
        <UserProfile user={profile} />
     
    </Container>
  );
}
