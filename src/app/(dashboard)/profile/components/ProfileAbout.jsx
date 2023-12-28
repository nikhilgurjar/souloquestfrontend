import React from "react";
import { Card, CardHeader, IconButton, Stack, Typography } from "@mui/material";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { FaBuildingUser } from "react-icons/fa6";
const ProfileAbout = ({
  about,
  country,
  email,
  city,
  state,
  company,
  education,
}) => {
  const icons = {
    About: "",
    Country: <FaLocationPin />,
    Email: <MdEmail />,
    Company: <FaBuildingUser/>,
    Education: <IoSchool/>,
  };

  const data = [
    { key: "About", value: about },
    { key: "Country", value: "Live at ", dynamic: country+", "+city+", "+state },
    { key: "Email", value: email },
    { key: "Company", value: "Working at ", dynamic: company },
    { key: "Education", value: education },
  ];

  return (
    <section className="relative w-full">
      <Card>
        <CardHeader title="About" />
        <Stack spacing={2} sx={{ p: 3 }}>
          {data &&
            data
              .filter(({ value }) => value !== undefined)
              .map(({ key, value, dynamic }) => (
                <Stack spacing={1} direction={"row"} alignItems={"center"}>
                  <IconButton
                    style={{
                      marginRight: 2,
                      flexShrink: 0,
                      color: "#000",
                      fontSize: "16px",
                    }}
                  >
                    {icons[key]}
                  </IconButton>
                  <Typography variant="body1" color="initial" key={key}>
                    {value}
                    {dynamic && (
                      <span style={{ fontWeight: "500" }}>{dynamic}</span>
                    )}
                  </Typography>
                </Stack>
              ))}
        </Stack>
      </Card>
    </section>
  );
};

export default ProfileAbout;
