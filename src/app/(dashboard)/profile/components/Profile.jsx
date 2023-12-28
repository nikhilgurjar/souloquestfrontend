// @mui
"use client";
import { Box, Card, Container, Grid, Stack, Tab, Tabs } from "@mui/material";
// @types
import UserProfile from "./UserProfile";
import ProfileCover from "./ProfileCover";

export default function Profile() {

//   const [currentTab, setCurrentTab] = useState("profile");
//   const TABS = [
//     {
//       value: "profile",
//       label: "Profile",
//       icon: <FaAddressCard />,
//       component: <UserProfile info={userInfo} />,
//     }
//   ];
  return (
    <Container>
      <Card
        sx={{
          mb: 3,
          height: 280,
          position: "relative",
        }}
      >
        <ProfileCover />
        <UserProfile />
      </Card>
   
    </Container>
  );
}
